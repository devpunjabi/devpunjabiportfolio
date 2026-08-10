/**
 * Single source of truth for identity, contact details and outbound links.
 *
 * Leave a social URL as an empty string and it is omitted from the UI entirely —
 * the site never renders a dead `href="#"`.
 */

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  /** Public handle, where showing it reads better than the platform name. */
  handle?: string;
}

export const SITE = {
  name: 'Dev Punjabi',
  /** Used in the page title, OG tags and the JSON-LD person record. */
  role: 'Research Engineer',
  tagline: 'Research engineer working on machine learning and AI systems in Karlsruhe, Germany.',
  email: 'devpunjabi203@gmail.com',
  location: {
    city: 'Karlsruhe',
    country: 'Germany',
  },
  /** Absolute origin of the deployed site — required for OG/canonical URLs. */
  url: 'https://devpunjabi.github.io/devpunjabiportfolio/',
} as const;

/**
 * Fill in the URLs you want shown. Anything left blank is hidden rather than
 * rendered as a broken link.
 */
const SOCIAL_URLS = {
  github: '',
  linkedin: 'https://www.linkedin.com/in/dev-punjabi-9562a0150/',
  scholar: '',
  instagram: 'https://www.instagram.com/artworks.dev/',
  twitter: '',
} as const;

const SOCIAL_LABELS: Record<keyof typeof SOCIAL_URLS, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  scholar: 'Google Scholar',
  instagram: 'Instagram',
  twitter: 'X',
};

/** Shown instead of the platform name where the handle is the recognisable part. */
const SOCIAL_HANDLES: Partial<Record<keyof typeof SOCIAL_URLS, string>> = {
  instagram: '@artworks.dev',
};

/** Only the links that have actually been configured. */
export const SOCIALS: SocialLink[] = (
  Object.keys(SOCIAL_URLS) as Array<keyof typeof SOCIAL_URLS>
)
  .filter((id) => SOCIAL_URLS[id].trim().length > 0)
  .map((id) => ({
    id,
    label: SOCIAL_LABELS[id],
    url: SOCIAL_URLS[id],
    handle: SOCIAL_HANDLES[id],
  }));

/**
 * Look up one profile for a page that links to it directly — the Arts page
 * points at Instagram, the career page at LinkedIn. Returns undefined when the
 * URL has not been filled in, so the caller renders nothing rather than a dead
 * link, the same rule the footer follows.
 */
export const findSocial = (id: keyof typeof SOCIAL_URLS): SocialLink | undefined =>
  SOCIALS.find((social) => social.id === id);

/**
 * EmailJS credentials come from the environment (see .env.example), never from
 * source. When they are absent the contact form degrades to a plain mailto:
 * hand-off instead of showing the visitor a configuration error.
 */
export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
};

export const EMAILJS_CONFIGURED = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey
);

/**
 * Google Analytics 4. The measurement ID (`G-XXXXXXXXXX`) comes from the
 * environment, so a checkout without one loads no Google script at all and
 * sends no requests — analytics is opt-in per deployment, not baked into source.
 *
 * Set VITE_GA_MEASUREMENT_ID in .env.local for local runs, and as a build-time
 * variable wherever `npm run build` happens for the deployed site.
 */
export const ANALYTICS = {
  measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID ?? '',
};

export const ANALYTICS_ENABLED = /^G-[A-Z0-9]+$/i.test(ANALYTICS.measurementId.trim());
