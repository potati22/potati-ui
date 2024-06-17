import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {
  PotatiComponentResolver,
  PotatiDirectiveResolver,
} from '@potati/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PotatiComponentResolver(), PotatiDirectiveResolver()],
    }),
    AutoImport({
      resolvers: [PotatiDirectiveResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages'),
    },
  },
})
