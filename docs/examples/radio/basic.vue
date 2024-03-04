<template>
  <div>
    <PotRadio v-model="checked" name="example" :options="options"></PotRadio>
  </div>
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
