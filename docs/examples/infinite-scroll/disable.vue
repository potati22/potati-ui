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
  color: #f56c6c;
  background-color: #2b1d1d;
}
div {
  text-align: center;
  height: 50px;
  margin-top: 10px;
}
</style>
