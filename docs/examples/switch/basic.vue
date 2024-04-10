<template>
  <div>
    <PotSwitch v-model="isOpen"></PotSwitch>
    <PotSwitch
      v-model="isOpen1"
      :style="{
        '--pot-switch-bg-color-on': '#13ce66',
      }"
    ></PotSwitch>
    <PotSwitch
      v-model="isOpen2"
      :style="{
        '--pot-switch-bg-color-on': '#ff4949',
        '--pot-switch-width': '60px',
        '--pot-switch-height': '30px',
      }"
    ></PotSwitch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(true)
const isOpen1 = ref(true)
const isOpen2 = ref(true)
</script>

<style>
.pot-switch {
  margin-right: 15px;
}
</style>
