<script setup>
import basic from '../examples/radio/basic.vue'
</script>

# Radio 单选框

在一组备选项中进行单选

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项，则应使用选择框

<basic></basic>

::: details 显示代码

```vue
<template>
  <PotRadioGroup v-model="checked">
    <PotRadio value="option1">选项一</PotRadio>
    <PotRadio value="option2">选项二</PotRadio>
    <PotRadio value="option3">选项三</PotRadio>
  </PotRadioGroup>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref('option1')
</script>
```

:::

## RadioGroup API

### 属性

| 属性名  | 说明               | 类型     | 默认值 |
| ------- | ------------------ | -------- | ------ |
| v-model | 选中项绑定值，必选 | `string` | ''     |

## Radio API

### 属性

| 属性名 | 说明         | 类型     | 默认值 |
| ------ | ------------ | -------- | ------ |
| value  | 选项值，必选 | `string` | ''     |
