/// <reference types="vite/client" />

// Uppercase image extensions (vite/client only declares lowercase ones)
declare module '*.PNG' {
  const src: string;
  export default src;
}

declare module '*.JPEG' {
  const src: string;
  export default src;
}

declare module '*.JPG' {
  const src: string;
  export default src;
}
