<template>
  <button ref="buttonRef" class="pot-button" :class="classObject">
    <slot>{{ slotDefault }}</slot>
  </button>
</template>

<script setup lang="ts">
import { ButtonProps } from './button'
import { computed } from 'vue'

defineOptions({
  name: 'PotButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: undefined,
})

const classObject = computed(() => {
  return {
    [`pot-button--${props.type}`]: props.type,
  }
})

const slotDefault = computed(() => {
  return props.type
    ? props.type.replace(
        props.type.charAt(0),
        props.type.charAt(0).toUpperCase(),
      )
    : 'Default'
})
</script>
