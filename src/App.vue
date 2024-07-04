<template>
  <ul
    v-infinite-scroll="load"
    :infinite-scroll-disabled="disabled"
    :infinite-scroll-distance="50"
    :style="{
      'background-color': 'blue',
      height: '200px',
      width: '100px',
      overflow: 'auto',
    }"
  >
    <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
  </ul>
  <PotButton @click="success"></PotButton>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref(6)
const loading = ref(false)
const noMore = computed(() => count.value >= 100)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 5
    loading.value = false
  }, 2000)
}

function success() {
  PotMessage({
    type: 'success',
    message: '这是一条Success类型的消息',
  })
}
</script>
