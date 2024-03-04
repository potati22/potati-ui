<script setup>
import basic from '../examples/icon/basic.vue'
</script>

# Icon 图标

PotatiUI 仅提供图标组件，不提供具体的图标，需在项目中自行引入相应**svg图标**和**插件**进行使用：

1. 安装`vite-plugin-svg-icons`插件

```
pnpm add vite-plugin-svg-icons -D
```

2. 在`vite.config.ts`中进行如下配置：

```ts
import { defineConfig } from 'vite'
import path from 'node:path'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'assets/icon')], // svg图标所在文件夹位置，可按实际情况进行修改
      symbolId: 'icon-[name]',
      svgoOptions: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: 'fill',
            },
          },
        ],
      },
    }),
  ],
})
```

3. 在项目的入口文件中：

```ts
import 'virtual:svg-icons-register'
```

## 基础用法

<basic></basic>

::: details 显示代码

```vue
<template>
  <div :style="{ fontSize: '30px', color: 'blue' }">
    <PotIcon icon-class="play"></PotIcon>
    <PotIcon icon-class="pause"></PotIcon>
    <PotIcon icon-class="add-btn"></PotIcon>
    <PotIcon icon-class="reduce-btn"></PotIcon>
  </div>
</template>
```

:::

## API

### 属性

| 属性名     | 说明        | 类型     | 默认值 |
| ---------- | ----------- | -------- | ------ |
| icon-class | svg文件名称 | `string` | —      |
