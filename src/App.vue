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
    duration: 0,
  })
}

function info() {
  PotMessage({
    type: 'info',
    message: 'infooooo',
    duration: 0,
  })
}

function error() {
  PotMessage({
    type: 'error',
    message: 'errorrrrrr',
    duration: 0,
  })
}

function warning() {
  PotMessage({
    type: 'warning',
    message: 'warninggggg',
    duration: 0,
  })
}
</script>
