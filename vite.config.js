import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['/sb-preview/runtime.js'],
  // or
  server: {
    preTransformRequests: false
  }
})
