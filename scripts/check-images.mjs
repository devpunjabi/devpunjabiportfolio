/**
 * Fails the build if any `img('...')` key has no entry in the generated manifest.
 *
 * Why this exists: `img()` throws when a key is unknown, and the content files
 * call it at module scope. A bad key therefore takes down the whole app on
 * load — a blank page on every route — while `tsc` and `vite build` both stay
 * green, because the key is just a string. That combination once shipped a
 * dead site to production. This check turns it into a build failure instead.
 *
 * Runs automatically as part of `npm run build`.
 */
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = path.join(ROOT, 'assets', 'generated', 'manifest.ts');
const SCAN_DIRS = ['content', 'components', 'assets'];
const SCAN_EXT = new Set(['.ts', '.tsx']);
const IMG_CALL = /\bimg\(\s*['"]([^'"]+)['"]\s*\)/g;

async function collectFiles(dir) {
  const found = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return found; // directory is optional
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await collectFiles(full)));
    else if (SCAN_EXT.has(path.extname(entry.name))) found.push(full);
  }
  return found;
}

/** Pull the top-level keys out of the generated manifest. */
async function manifestKeys() {
  const source = await readFile(MANIFEST, 'utf8');
  return new Set([...source.matchAll(/^ {2}"([^"]+)":\s*\{/gm)].map((m) => m[1]));
}

const known = await manifestKeys();
if (known.size === 0) {
  console.error('check-images: manifest is empty. Run `npm run images` first.');
  process.exit(1);
}

const files = (await Promise.all(SCAN_DIRS.map((d) => collectFiles(path.join(ROOT, d))))).flat();

const problems = [];
const used = new Set();

for (const file of files) {
  if (file === MANIFEST) continue;
  const source = await readFile(file, 'utf8');
  const lines = source.split('\n');
  lines.forEach((line, index) => {
    for (const match of line.matchAll(IMG_CALL)) {
      const key = match[1];
      used.add(key);
      if (!known.has(key)) {
        problems.push({ file: path.relative(ROOT, file), line: index + 1, key });
      }
    }
  });
}

if (problems.length > 0) {
  console.error(`\ncheck-images: ${problems.length} image key(s) have no optimized output:\n`);
  for (const { file, line, key } of problems) {
    console.error(`  ${file}:${line}`);
    console.error(`    "${key}"`);
    const near = [...known].filter((k) => k.split('/').pop().split('.')[0] === key.split('/').pop().split('.')[0]);
    if (near.length > 0) console.error(`    did you mean: ${near.join(', ')}`);
  }
  console.error(
    '\nAdd the file under assets/ and run `npm run images`, or fix the key above.\n' +
      'Left unfixed this builds fine and then blanks the site at runtime.\n'
  );
  process.exit(1);
}

const unused = [...known].filter((k) => !used.has(k));
console.log(`check-images: ${used.size} image key(s) OK${unused.length ? `, ${unused.length} optimized but unused` : ''}.`);
