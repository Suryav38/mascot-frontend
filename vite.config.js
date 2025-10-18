import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Ensure proper CSS processing
  css: {
    postcss: './postcss.config.js',
  },
  
  // Optimize build
  build: {
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  
  // Development server
  server: {
    port: 5173,
    strictPort: true,
  },
})