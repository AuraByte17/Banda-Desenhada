import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Banda-Desenhada/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
