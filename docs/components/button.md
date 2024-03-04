<script setup>
import basic from '../examples/button/basic.vue'
</script>

# Button 按钮

常用的操作按钮。

## 基础用法

按钮可以根据 `type` 来设置不同的颜色，如`yellow`

<basic></basic>

::: details 显示代码

```vue
<template>
  <PotButton>Default</PotButton>
  <PotButton type="yellow"></PotButton>
</template>
```

:::

## API

### 属性

| 属性名 | 说明     | 类型     | 默认值 |
| ------ | -------- | -------- | ------ |
| type   | 颜色种类 | `string` | —      |
