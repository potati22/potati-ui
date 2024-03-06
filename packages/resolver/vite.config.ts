import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      name: 'POTATI_RESOLVER',
      entry: 'index.ts',
    },
    rollupOptions: {
      output: [
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: 'lib',
        },
      ],
    },
  },
})
