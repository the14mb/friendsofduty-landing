import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Built locally, output committed to docs/ — GitHub Pages serves that folder
// from main. Two HTML entries, so /privacy/ is a real static path and we need
// neither a router nor a 404.html fallback.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
      },
    },
  },
})
