import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Change from './' to '/' for custom domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
