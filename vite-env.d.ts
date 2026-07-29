/// <reference types="vite/client" />

// Photos are no longer imported directly — scripts/optimize-images.mjs turns them
// into responsive derivatives under public/img and a typed manifest.

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
