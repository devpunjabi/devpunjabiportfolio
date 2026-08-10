/**
 * Assembles the per-page content files into the dictionaries the language
 * context hands to components.
 *
 * ── Adding a page ────────────────────────────────────────────────────────
 *   1. Add its id to `PageId` in ../types.ts
 *   2. Copy an existing file in this folder as content/<page>.ts
 *   3. Import it below and add it to `PAGES`
 *   4. Add a nav entry in ./navigation.ts if it should appear in the menu
 *
 * ── Editing a page ───────────────────────────────────────────────────────
 *   Open content/<page>.ts. Everything for that page — hero, every section's
 *   image, and both languages of every caption — is in that one file.
 */
import type { PageData } from '../types';
import { type Locale, type PageContent, localizePage } from './types';

import careerBio from './career-bio';
import digital3d from './digital-3d';
import fitness from './fitness';
import paintings from './paintings';
import personalBio from './personal-bio';
import sculptures from './sculptures';
import sideProjects from './side-projects';
import taekwondo from './taekwondo';

/** Every scrollytelling page. Order here does not affect the site. */
const PAGES: PageContent[] = [
  personalBio,
  careerBio,
  taekwondo,
  paintings,
  sculptures,
  digital3d,
  fitness,
  sideProjects,
];

const buildDictionary = (locale: Locale): Record<string, PageData> =>
  Object.fromEntries(PAGES.map((page) => [page.id, localizePage(page, locale)]));

export const PAGES_DATA_EN = buildDictionary('en');
export const PAGES_DATA_DE = buildDictionary('de');

export { NAVIGATION_EN, NAVIGATION_DE } from './navigation';
export { UI_TEXT } from './ui-text';
export { HOME_PHOTOS, homeText } from './home';
export type { Locale } from './types';
