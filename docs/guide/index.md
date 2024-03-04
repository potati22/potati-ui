# 快速开始

介绍如何在项目中使用 Potati UI

## 安装

```
pnpm add @potati/components @potati/theme-chalk

```

## 完整导入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便

```ts
// 项目入口文件 main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@potati/components/es/style'
import PotComponents from '@potati/components'

createApp(App).use(PotComponents).mount('#app')
```

## 按需导入

需要安装额外的插件:

```
pnpm add @potati/resolver unplugin-vue-components unplugin-auto-import -D
```

然后在项目的`vite.config.ts`进行如下配置：

```ts
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { PotatiResolver } from '@potati/resolver'

export default defineConfig({
  plugins: [
    // ...
    Components({
      resolvers: [PotatiResolver()],
    }),
    AutoImport({
      resolvers: [PotatiResolver()],
    }),
  ],
  // ...
})
```

## TS提示

为了在使用组件库组件时获得ts提示，需要在项目的`tsconfig.json`中进行如下配置：

```json
{
  "compilerOptions": {
    // ...
    "types": ["@potati/components/global.d.ts"]
  }
}
```
