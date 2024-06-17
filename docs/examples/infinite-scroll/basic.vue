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

<style lang="scss" scoped>
.list {
  height: 300px;
  list-style: none;
  overflow: auto;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: #409eff;
  background-color: #18222c;
}
</style>
