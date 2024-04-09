<template>
  <div>
    <PotSwitch v-model="isOpen"></PotSwitch>
    <PotSwitch
      v-model="isOpen1"
      :style="{
        '--pot-switch-bg-color-on': '#13ce66',
      }"
    ></PotSwitch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref(true)
const isOpen1 = ref(true)
</script>

<style>
.pot-switch {
  margin-right: 15px;
}
</style>
