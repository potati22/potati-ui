<script setup>
import basic from '../examples/radio/basic.vue'
</script>

# Radio 单选框

在一组备选项中进行单选

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框

<basic></basic>

::: details 显示代码

```vue
<template>
  <PotRadio v-model="checked" name="example" :options="options" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RadioOptionsItem {
  id: number
  value: string
  label: string
}

const checked = ref('')
const options: RadioOptionsItem[] = [
  {
    label: 'option1',
    value: 'option1',
    id: 1,
  },
  {
    label: 'option2',
    value: 'option2',
    id: 2,
  },
  {
    label: 'option3',
    value: 'option3',
    id: 3,
  },
]
</script>
```

:::

## API

### 属性

| 属性名  | 说明                             | 类型                 | 默认值 |
| ------- | -------------------------------- | -------------------- | ------ |
| v-model | 选中项绑定值，必选               | `string`             | —      |
| name    | 单选框的名称，保证全局唯一，必选 | `string`             | —      |
| options | 单选框的所有配置项，必选         | `RadioOptionsItem[]` | —      |
