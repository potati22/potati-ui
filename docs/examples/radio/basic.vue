<template>
  <div>
    <PotRadioGroup v-model="checked">
      <PotRadio value="option1">选项一</PotRadio>
      <PotRadio value="option2">选项二</PotRadio>
      <PotRadio value="option3">选项三</PotRadio>
    </PotRadioGroup>
    <div style="margin-top: 15px">你的选择为：{{ checked }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref('option1')
</script>
