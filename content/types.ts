/**
 * Shape of the per-page content files in this folder.
 *
 * Each page lives in exactly one file (`content/<page>.ts`) and holds both
 * languages side by side. The structural bits — which image, which order,
 * whether a section spans two columns — are written once and shared, so the
 * English and German versions of a page can never drift apart structurally.
 *
 * `localizePage` flattens one of those files into the `PageData` shape the
 * components already consume, so nothing downstream had to change.
 */
import type { ImageAsset } from '../assets/image';
import type { GalleryItem, PageData, PageId, RoleProject } from '../types';

export type Locale = 'en' | 'de';

/** The wording of one section, in one language. */
export interface SectionText {
  /** Heading shown above the section, and the alt text for its image. */
  title: string;
  /** Body copy. Rendered as HTML, so inline tags are allowed. */
  description?: string;
  /** Small line above the title — used for dates on the career page. */
  subtitle?: string;
  /** Pill labels under the copy — only the career page renders these. */
  tags?: string[];
  /**
   * Named projects worked on in this role. Only the career page renders these,
   * and both names and descriptions are translated, so they live per language.
   */
  projects?: RoleProject[];
}

/** One scroll section: an image plus its copy in both languages. */
export interface Section {
  /** Stable id. Drives scroll tracking, so keep it unique within the page. */
  id: string;
  /** The photo shown while this section is in view. */
  image: ImageAsset;
  /** Give this item a double-width cell in the arts grid. */
  span?: boolean;
  en: SectionText;
  de: SectionText;
}

/** The page header, in one language. */
export interface PageText {
  title: string;
  /** Small label above the title. */
  subtitle: string;
  /** Opening paragraph, shown before the first section. */
  description: string;
}

/** A whole page: one of these per file in this folder. */
export interface PageContent {
  id: PageId;
  /** Tailwind background class kept alongside the page for theming. */
  themeColor: string;
  /** Image shown before the reader reaches the first section. */
  hero: ImageAsset;
  en: PageText;
  de: PageText;
  sections: Section[];
}

/**
 * Identity function that pins the type of a page file. Wrapping the object in
 * this is what makes the editor complete field names and flag a missing
 * translation, rather than silently accepting a typo.
 */
export const definePage = (page: PageContent): PageContent => page;

/** Flatten a bilingual page file into the single-language shape components read. */
export function localizePage(page: PageContent, locale: Locale): PageData {
  const header = page[locale];

  return {
    id: page.id,
    title: header.title,
    subtitle: header.subtitle,
    description: header.description,
    heroImage: page.hero,
    themeColor: page.themeColor,
    gallery: page.sections.map((section): GalleryItem => {
      const text = section[locale];
      return {
        id: section.id,
        imageUrl: section.image,
        title: text.title,
        description: text.description,
        subtitle: text.subtitle,
        tags: text.tags,
        projects: text.projects,
        span: section.span,
      };
    }),
  };
}
