<template>
  <div>
    <div>{{ myHusband }}</div>
    <PotRadioGroup v-model="myHusband">
      <PotRadio value="heeseung">李羲承</PotRadio>
      <PotRadio value="jungwon">梁祯元</PotRadio>
      <PotRadio value="sunhoon">朴成勋</PotRadio>
    </PotRadioGroup>
    <button @click="test">test</button>
    <div>--------------</div>
    <PotSwitch v-model="switchValue"></PotSwitch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const myHusband = ref('heeseung')
const switchValue = ref(false)

function test() {
  myHusband.value = 'heeseung'
}
</script>
