import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
  ],
  server: {
    proxy: {
      '/chat': 'http://localhost:8000',
      '/crawl': 'http://localhost:8000',
      '/status': 'http://localhost:8000',
    }
  },
  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'ChatWidget',
      fileName: 'widget',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        extend: true,
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})
