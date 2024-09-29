import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    //   host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000'
      },
    },
  },

})
