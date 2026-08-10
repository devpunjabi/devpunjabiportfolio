/**
 * Site navigation. Both languages live on one line per entry so a new page
 * cannot be added to one language and forgotten in the other.
 *
 * Order matters: PageLayout's "Up Next" link walks this list.
 */
import type { NavItem, PageId } from '../types';
import type { Locale } from './types';

interface NavEntry {
  id: PageId;
  path: string;
  en: string;
  de: string;
}

export const NAV_ENTRIES: NavEntry[] = [
  { id: 'career-bio', path: '/career-bio', en: 'Career', de: 'Karriere' },
  { id: 'side-projects', path: '/side-projects', en: 'Projects', de: 'Projekte' },
  { id: 'personal-bio', path: '/personal-bio', en: 'About Me', de: 'Über Mich' },
  { id: 'arts', path: '/arts', en: 'Arts', de: 'Kunst' },
  { id: 'taekwondo', path: '/taekwondo', en: 'Taekwondo', de: 'Taekwondo' },
  { id: 'fitness', path: '/fitness', en: 'Fitness', de: 'Fitness' },
  { id: 'contact', path: '/contact', en: 'Contact', de: 'Kontakt' },
];

const localizeNav = (locale: Locale): NavItem[] =>
  NAV_ENTRIES.map(({ id, path, [locale]: label }) => ({ id, path, label }));

export const NAVIGATION_EN = localizeNav('en');
export const NAVIGATION_DE = localizeNav('de');
