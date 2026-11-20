import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import imageSizes from 'vite-plugin-image-sizes'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    imageSizes({ addLazyLoading: true })
  ],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})