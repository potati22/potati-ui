<template>
  <div>
    {{ state }}--{{ state1 }}
    <PotButton></PotButton>
    <PotButton type="yellow"></PotButton>
    <PotRadio v-model="state" :options="members" name="my5"></PotRadio>
    <div></div>
    <PotRadio v-model="state1" :options="members1" name="my"></PotRadio>
    <button @click="cancelFocus">cancel</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const state = ref('朴成训')
const state1 = ref('李羲承')

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

const members1 = [
  {
    label: '李羲承',
    value: '李羲承',
    id: 2,
  },
  {
    label: '粱祯元',
    value: '粱祯元',
    id: 1,
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
