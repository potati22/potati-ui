<template>
  <div>
    <PotInput ref="inputRef" v-model="state" />
    {{ state }}
    <PotButton @click="onFocus"></PotButton>
  </div>
</template>

<script setup lang="ts">
import type { InputInstance } from '@potati/components'
import { ref } from 'vue'

const state = ref('')
const inputRef = ref<InputInstance>()

function onFocus() {
  inputRef.value?.focus()
}
</script>
