<template>
  <div>
    <PotButton @click="info">info</PotButton>
    <PotButton @click="success">success</PotButton>
    <PotButton @click="error">error</PotButton>
    <PotButton @click="warning">warning</PotButton>
  </div>
</template>

<script lang="ts" setup>
import { PotMessage } from '@potati/components'

function info() {
  PotMessage({
    type: 'info',
    message: '这是一条Info类型的消息',
  })
}

function success() {
  PotMessage({
    type: 'success',
    message: '这是一条Success类型的消息',
  })
}

function error() {
  PotMessage({
    type: 'error',
    message: '这是一条Error类型的消息',
  })
}

function warning() {
  PotMessage({
    type: 'warning',
    message: '这是一条Warning类型的消息',
  })
}
</script>

<style>
.pot-button {
  margin-right: 20px;
}
</style>
