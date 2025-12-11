
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This must match your GitHub repository name exactly for assets to load correctly
  base: '/devpunjabiportfolio/', 
  build: {
    outDir: 'dist',
  },
});
