/**
 * Generates responsive image derivatives from the originals in assets/.
 *
 * For every source photo this writes AVIF + WebP at several widths, a single
 * JPEG fallback, and a tiny inline blur placeholder (LQIP). Output filenames
 * embed a content hash so they can be cached immutably.
 *
 * Run with `npm run images`. Existing outputs are skipped, so re-running after
 * adding one photo only processes that photo.
 */
import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_DIR = path.join(ROOT, 'assets');
const OUTPUT_DIR = path.join(ROOT, 'public', 'img');
const MANIFEST = path.join(ROOT, 'assets', 'generated', 'manifest.ts');

const WIDTHS = [640, 1280, 1920];
const FALLBACK_WIDTH = 1280;
const SOURCE_EXT = new Set(['.png', '.jpg', '.jpeg', '.heic']);

const QUALITY = {
  avif: 50,
  webp: 74,
  jpeg: 80,
};

/** Recursively collect every source photo under assets/, ignoring generated output. */
async function collectSources(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === 'generated') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await collectSources(full)));
    } else if (SOURCE_EXT.has(path.extname(entry.name).toLowerCase())) {
      found.push(full);
    }
  }
  return found.sort();
}

/** Short content hash so derivatives can be served with immutable cache headers. */
async function hashFile(file) {
  const buffer = await readFile(file);
  return createHash('sha256').update(buffer).digest('hex').slice(0, 8);
}

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function processImage(source) {
  const key = path.relative(SOURCE_DIR, source).split(path.sep).join('/');
  const outputSubdir = path.dirname(key);
  const stem = path.basename(key, path.extname(key));
  const hash = await hashFile(source);

  await mkdir(path.join(OUTPUT_DIR, outputSubdir), { recursive: true });

  // .rotate() with no argument applies the EXIF orientation tag, which iPhone
  // photos rely on — without it half the portraits come out sideways.
  // metadata() reports the *pre-rotation* dimensions, so swap them ourselves for
  // the quarter-turn orientations (5-8); otherwise width/height attributes would
  // describe the wrong aspect ratio and reintroduce layout shift.
  const meta = await sharp(source).metadata();
  const quarterTurned = (meta.orientation ?? 1) >= 5;
  const sourceWidth = (quarterTurned ? meta.height : meta.width) ?? FALLBACK_WIDTH;
  const sourceHeight = (quarterTurned ? meta.width : meta.height) ?? FALLBACK_WIDTH;

  // Never upscale: drop any target wider than the original, but always keep at
  // least one width so tiny sources still produce output.
  const widths = WIDTHS.filter((w) => w <= sourceWidth);
  if (widths.length === 0) widths.push(sourceWidth);

  const fileName = (width, ext) => `${stem}-${hash}-${width}.${ext}`;
  // Paths in the manifest are relative to the Vite base URL, which the runtime
  // helper in assets/image.ts prepends.
  const relative = (width, ext) =>
    path.posix.join('img', outputSubdir === '.' ? '' : outputSubdir, fileName(width, ext));
  const targetPath = (width, ext) => path.join(OUTPUT_DIR, outputSubdir, fileName(width, ext));

  const variants = { avif: [], webp: [] };

  for (const width of widths) {
    for (const format of ['avif', 'webp']) {
      const target = targetPath(width, format);
      if (!(await exists(target))) {
        await sharp(source)
          .rotate()
          .resize({ width, withoutEnlargement: true })
          [format]({ quality: QUALITY[format] })
          .toFile(target);
      }
      variants[format].push({ width, rel: relative(width, format) });
    }
  }

  // Single JPEG fallback for browsers without WebP/AVIF support.
  const fallbackWidth = Math.min(FALLBACK_WIDTH, sourceWidth);
  const fallbackRel = relative(fallbackWidth, 'jpg');
  const fallbackTarget = targetPath(fallbackWidth, 'jpg');
  if (!(await exists(fallbackTarget))) {
    await sharp(source)
      .rotate()
      .resize({ width: fallbackWidth, withoutEnlargement: true })
      .jpeg({ quality: QUALITY.jpeg, mozjpeg: true })
      .toFile(fallbackTarget);
  }

  // Inline blur placeholder shown until the real image decodes.
  const lqipBuffer = await sharp(source)
    .rotate()
    .resize({ width: 16 })
    .webp({ quality: 20 })
    .toBuffer();

  const toSrcSet = (list) => list.map((v) => `${v.rel} ${v.width}w`).join(', ');

  return {
    key,
    entry: {
      src: fallbackRel,
      avif: toSrcSet(variants.avif),
      webp: toSrcSet(variants.webp),
      width: sourceWidth,
      height: sourceHeight,
      lqip: `data:image/webp;base64,${lqipBuffer.toString('base64')}`,
    },
  };
}

async function main() {
  const sources = await collectSources(SOURCE_DIR);
  console.log(`Optimising ${sources.length} source images…`);

  const manifest = {};
  for (const [index, source] of sources.entries()) {
    const { key, entry } = await processImage(source);
    manifest[key] = entry;
    console.log(`  [${index + 1}/${sources.length}] ${key}`);
  }

  await mkdir(path.dirname(MANIFEST), { recursive: true });
  await writeFile(
    MANIFEST,
    `// GENERATED BY scripts/optimize-images.mjs — DO NOT EDIT BY HAND.\n` +
      `// Run \`npm run images\` to regenerate after adding or replacing a photo.\n\n` +
      `import type { RawImage } from '../image';\n\n` +
      `export const MANIFEST: Record<string, RawImage> = ${JSON.stringify(manifest, null, 2)};\n`,
    'utf8'
  );

  console.log(`\nWrote manifest with ${Object.keys(manifest).length} entries.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
