import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [],
        parserOpts: {
          plugins: ['jsx']
        }
      }
    }),
    tailwindcss(),
  ],
})
