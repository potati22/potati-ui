import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'node:path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      // 表明哪些地方的文件需要为其产生dts文件
      // 此处直接读取tsconfig.json中的include字段
      tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
      outDir: ['types'],
      staticImport: true, // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
      rollupTypes: true, // 将所有的类型合并到一个文件中
    }),
  ],
  build: {
    // 库模式
    // 库模式下，cssCodeSplit默认为false
    lib: {
      entry: 'src/index.ts',
      name: 'POTATI_COMPONENTS',
    },
    rollupOptions: {
      external: ['vue'], // 将vue模块排除在打包文件之外，使用用这个组件库的项目的vue模块
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true, // 打包目录和开发目录对应
          dir: 'es',
          preserveModulesRoot: 'src', // 指定保留模块结构的根目录
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true, // 打包目录和开发目录对应
          dir: 'lib',
          preserveModulesRoot: 'src', // 指定保留模块结构的根目录
        },
      ],
    },
  },
})
