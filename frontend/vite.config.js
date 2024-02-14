/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { BACK_URL } from './src/constants'; 

const isProd = process.env.NODE_ENV === 'production';
const apiTarget = BACK_URL(isProd)
console.log('use backend: ' + apiTarget)

export default defineConfig({
  plugins: [react()],
  server: {
  proxy: {
    '/api': {
      target: apiTarget,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },}
})
