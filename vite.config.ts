import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { PotatiResolver } from '@potati/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PotatiResolver()],
    }),
    AutoImport({
      resolvers: [PotatiResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages'),
    },
  },
})
