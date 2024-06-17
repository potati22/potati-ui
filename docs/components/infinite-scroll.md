<script setup>
import basic from '../examples/infinite-scroll/basic.vue'
import disable from '../examples/infinite-scroll/disable.vue'

</script>

# Infinite Scroll 无限滚动

滚动至底部时，加载更多数据。

## 基础用法

在要实现滚动加载的列表上添加v-infinite-scroll，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法

<basic></basic>

::: details 显示代码

```vue
<template>
  <ul v-infinite-scroll="load" class="list" :infinite-scroll-distance="50">
    <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(5)

const load = () => {
  setTimeout(() => {
    count.value += 5
  }, 2000)
}
</script>
```

:::

## 禁用加载

<disable></disable>

::: details 显示代码

```vue
<template>
  <ul
    v-infinite-scroll="load"
    class="list"
    :infinite-scroll-disabled="disabled"
  >
    <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
    <div v-show="loading">loading ...</div>
    <div v-if="noMore">no more</div>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(5)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 5
    loading.value = false
  }, 2000)
}
</script>
```

:::

## API

### 属性

| 属性名                    | 说明                                                 | 类型       | 默认值   |
| ------------------------- | ---------------------------------------------------- | ---------- | -------- |
| v-infinite-scroll         | 滚动到底部时，加载更多数据                           | `Function` | -        |
| infinite-scroll-disabled  | 是否禁用                                             | `boolean`  | `false ` |
| infinite-scroll-delay     | 节流时延，单位为ms                                   | `number`   | `200`    |
| infinite-scroll-distance  | 触发加载的距离阈值，单位为px                         | `number`   | `0`      |
| infinite-scroll-immediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器 | `boolean`  | `true`   |
