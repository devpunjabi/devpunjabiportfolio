/// <reference types="vite/client" />

// Photos are no longer imported directly — scripts/optimize-images.mjs turns them
// into responsive derivatives under public/img and a typed manifest.

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  /** Google Analytics 4 measurement ID, e.g. G-XXXXXXXXXX. Absent = no tracking. */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
