<template>
  <div :style="{ 'background-color': '#141414', height: '500px' }">
    <button @click="success">success</button>
    <button @click="info">info</button>
    <button @click="error">error</button>
    <button @click="warning">warning</button>
  </div>
</template>

<script setup lang="ts">
function success() {
  PotMessage({
    type: 'success',
    message: '你成功啦',
  })
}

function info() {
  PotMessage({
    type: 'info',
    message: 'infooooo',
  })
}

function error() {
  PotMessage({
    type: 'error',
    message: 'errorrrrrr',
  })
}

function warning() {
  PotMessage({
    type: 'warning',
    message: 'warninggggg',
  })
}
</script>
