import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    enviroment: 'jsdom',
    globals: true,
  },
  baseUrl: './',
  server: {
    port: 1224,  // pick any port number
    host: true   // this is the critical setting
  },
 
})