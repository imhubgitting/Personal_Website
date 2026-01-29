import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Custom domain at root
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
