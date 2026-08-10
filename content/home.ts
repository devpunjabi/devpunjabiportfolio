/**
 * The landing page. It does not use the shared PageLayout — it has its own
 * hero copy and two decorative photos — so it gets its own small shape rather
 * than the `definePage` one used by the scrollytelling pages.
 */
import { img } from '../assets/image';
import type { ImageAsset, } from '../assets/image';
import type { Locale } from './types';

interface HomePhoto {
  image: ImageAsset;
  /** Alt text, per language. */
  en: string;
  de: string;
}

interface HomeText {
  /** Small line above the headline. */
  eyebrow: string;
  /** Headline, split across two lines — the second is set in italic. */
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  /** Label on the call-to-action link. */
  cta: string;
}

export const HOME_PHOTOS: HomePhoto[] = [
  {
    image: img('career-bio/IMG_0657.PNG'), // On a cliff walkway in the Alps — the mountains half of the pair
    en: 'Dev Punjabi on a cliff walkway high in the Alps',
    de: 'Dev Punjabi auf einem Felsensteg hoch in den Alpen',
  },
  {
    image: img('home/IMG_5268.png'), // Gazing up at framed astronomy prints — the focal portrait
    en: 'Dev Punjabi looking up at a wall of framed astronomy prints',
    de: 'Dev Punjabi blickt auf eine Wand mit gerahmten Astronomie-Drucken',
  },
];

const HOME_TEXT: Record<Locale, HomeText> = {
  en: {
    eyebrow: 'DEV PUNJABI — RESEARCH, ENGINEERING & ARTS',
    headlineLine1: 'Curiosity,',
    headlineLine2: 'Engineered',
    description:
      'Research engineer building systems at the frontier of machine intelligence — drawing on art, martial arts, and the mountains to see a little further.',
    cta: 'Explore the Work',
  },
  de: {
    eyebrow: 'DEV PUNJABI — FORSCHUNG & ENTWICKLUNG',
    headlineLine1: 'Neugier,',
    headlineLine2: 'Konstruiert',
    description:
      'Research Engineer an der Grenze maschineller Intelligenz — inspiriert von Kunst, Kampfkunst und den Bergen, um ein Stück weiter zu sehen.',
    cta: 'Arbeit Entdecken',
  },
};

export const homeText = (locale: Locale): HomeText => HOME_TEXT[locale];
