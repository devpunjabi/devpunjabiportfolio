/**
 * Search-engine copy for the three routes that have no page file of their own.
 *
 * Every other route takes its title and meta description straight from
 * `content/<page>.ts`, so there is only one place to edit a page's wording.
 * Home, Arts and Contact are assembled in components rather than content files,
 * so their wording lives here — both languages side by side, as everywhere else.
 */
import type { Locale } from './types';

export interface RouteMeta {
  /** Used verbatim as the document title on '/', and suffixed with the site name elsewhere. */
  title: string;
  /** Meta description. Keep under ~155 characters or search results truncate it. */
  description: string;
}

const ROUTE_META: Record<string, Record<Locale, RouteMeta>> = {
  '/': {
    en: {
      title: 'Dev Punjabi — Research Engineer',
      description:
        'Research engineer in Karlsruhe working on machine learning for chemistry — reaction and IR spectrum prediction, agentic data curation, plus sculpture and Taekwondo.',
    },
    de: {
      title: 'Dev Punjabi — Research Engineer',
      description:
        'Research Engineer in Karlsruhe: maschinelles Lernen für die Chemie — Reaktions- und IR-Spektren-Vorhersage, agentische Datenkuratierung, dazu Skulptur und Taekwondo.',
    },
  },
  '/arts': {
    en: {
      title: 'Exhibitions & Form',
      description:
        'Sculptures, graphite drawings and digital 3D work by Dev Punjabi — scale models, shadow-box dioramas, hand-painted busts and tablet-sculpted figures.',
    },
    de: {
      title: 'Ausstellungen & Form',
      description:
        'Skulpturen, Graphitzeichnungen und digitale 3D-Arbeiten von Dev Punjabi — Modellbau, Schaukasten-Dioramen, handbemalte Büsten und auf dem Tablet modellierte Figuren.',
    },
  },
  '/contact': {
    en: {
      title: 'Contact',
      description:
        'Get in touch with Dev Punjabi about research collaborations, engineering work, commissions or Taekwondo.',
    },
    de: {
      title: 'Kontakt',
      description:
        'Kontakt zu Dev Punjabi — für Forschungskooperationen, Engineering-Projekte, Auftragsarbeiten oder Taekwondo.',
    },
  },
};

export const routeMeta = (path: string, locale: Locale): RouteMeta | undefined =>
  ROUTE_META[path]?.[locale];
