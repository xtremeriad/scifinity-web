import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
});
