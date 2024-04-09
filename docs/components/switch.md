<script setup>
import basic from '../examples/switch/basic.vue'
</script>

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--pot-switch-bg-color-on` 属性与 `--pot-switch-bg-color-off` 属性来设置开关的背景色。

<basic></basic>

::: details 显示代码

```vue
<template>
  <PotSwitch v-model="isOpen"></PotSwitch>
  <PotSwitch
    v-model="isOpen1"
    :style="{
      '--pot-switch-bg-color-on': '#13ce66',
    }"
  ></PotSwitch>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(false)
const isOpen1 = ref(true)
</script>
```

:::

## API

### 属性

| 属性名  | 说明         | 类型      | 默认值 |
| ------- | ------------ | --------- | ------ |
| v-model | 绑定值，必选 | `boolean` | false  |
