<template>
  <Transition name="pot-message-fade">
    <div
      v-show="visible"
      :id="props.id"
      :class="classObject"
      :style="styleObject"
    >
      <PotIcon :icon-class="props.type" :style="{ 'margin-right': '5px' }" />
      {{ props.message }}
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { closeInstance } from './method'
import { PotIcon } from '@potati/components/src/Icon'

import type { MessageProps } from './message'

defineOptions({
  name: 'PotMessage',
})

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  message: 'message content',
  duration: 3000,
})

const visible = ref(false)
let stopTimer: number

const classObject = computed(() => {
  return ['pot-message', `pot-message--${props.type}`]
})

const styleObject = computed(() => {
  return {
    '--pot-message-top': `${props.bottom}px`,
  }
})

onMounted(() => {
  visible.value = true
  startTimer()
})

defineExpose({
  close,
})

function close() {
  visible.value = false
  closeInstance(props.id)
  clearTimer()
}

function startTimer() {
  if (props.duration == 0) return
  stopTimer = window.setTimeout(close, props.duration)
}

function clearTimer() {
  window.clearTimeout(stopTimer)
}
</script>
