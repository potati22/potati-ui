<template>
  <div>
    {{ state }}
    <PotButton></PotButton>
    <PotButton type="yellow"></PotButton>
    <PotRadio v-model="state" name="enhypen" :options="members"></PotRadio>
    <button @click="cancelFocus">cancel</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const state = ref('')

const members = [
  {
    label: '李羲承',
    value: '李羲承',
    id: 1,
  },
  {
    label: '粱祯元',
    value: '粱祯元',
    id: 2,
  },
  {
    label: '朴成训',
    value: '朴成训',
    id: 3,
  },
]

function cancelFocus() {
  state.value = ''
}
</script>
