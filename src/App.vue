<template>
  <div>
    <button @click="test">test</button>
    <div>--------------</div>
    <PotSwitch
      v-model="switchValue"
      :style="{
        '--pot-switch-width': '80px',
        '--pot-switch-height': '40px',
      }"
    ></PotSwitch>
    <div>__________</div>
    <div v-show="isShow">
      <PotSwitch v-model="switchValue"></PotSwitch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const switchValue = ref(false)
const isShow = ref(false)

function test() {
  isShow.value = !isShow.value
}
</script>
