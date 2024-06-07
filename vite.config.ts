import { defineConfig, preview } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:6300},
  preview: {
    port: 6300,
  },
},

)
