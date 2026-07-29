/**
 * Runtime access to the generated image manifest.
 *
 * The manifest stores paths relative to the deploy base (e.g. `img/home/x-1280.avif`)
 * because the same build is served from a subpath on GitHub Pages. Everything is
 * resolved against Vite's BASE_URL here so components never deal with it.
 */
import { MANIFEST } from './generated/manifest';

/** Shape written by scripts/optimize-images.mjs — paths are base-relative. */
export interface RawImage {
  src: string;
  avif: string;
  webp: string;
  width: number;
  height: number;
  lqip: string;
}

/** Fully resolved image, ready to hand to the <Img> component. */
export interface ImageAsset extends RawImage {
  key: string;
}

const BASE = import.meta.env.BASE_URL;

const withBase = (relativePath: string) => `${BASE}${relativePath}`;

const resolveSrcSet = (srcSet: string) =>
  srcSet
    .split(', ')
    .filter(Boolean)
    .map((candidate) => {
      const separator = candidate.lastIndexOf(' ');
      return `${withBase(candidate.slice(0, separator))}${candidate.slice(separator)}`;
    })
    .join(', ');

const cache = new Map<string, ImageAsset>();

/**
 * Look up an optimized image by its path relative to assets/,
 * e.g. `img('personal-bio/IMG_1955.png')`.
 */
export function img(key: string): ImageAsset {
  const cached = cache.get(key);
  if (cached) return cached;

  const raw = MANIFEST[key];
  if (!raw) {
    throw new Error(
      `No optimized image for "${key}". Add the file under assets/ and run \`npm run images\`.`
    );
  }

  const resolved: ImageAsset = {
    key,
    src: withBase(raw.src),
    avif: resolveSrcSet(raw.avif),
    webp: resolveSrcSet(raw.webp),
    width: raw.width,
    height: raw.height,
    lqip: raw.lqip,
  };

  cache.set(key, resolved);
  return resolved;
}
