import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Personal_Website/', // GitHub Pages deployment path
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
