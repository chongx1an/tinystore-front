import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages(),],
  resolve: {
    alias: [
      {
        find: '@', replacement: path.resolve(__dirname, '/src')
      }
    ]
  }
})
