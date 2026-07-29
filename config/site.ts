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
  linkedin: '',
  scholar: '',
  instagram: '',
  twitter: '',
} as const;

const SOCIAL_LABELS: Record<keyof typeof SOCIAL_URLS, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  scholar: 'Google Scholar',
  instagram: 'Instagram',
  twitter: 'X',
};

/** Only the links that have actually been configured. */
export const SOCIALS: SocialLink[] = (
  Object.keys(SOCIAL_URLS) as Array<keyof typeof SOCIAL_URLS>
)
  .filter((id) => SOCIAL_URLS[id].trim().length > 0)
  .map((id) => ({ id, label: SOCIAL_LABELS[id], url: SOCIAL_URLS[id] }));

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
