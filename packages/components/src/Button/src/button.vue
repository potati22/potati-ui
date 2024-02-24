<template>
  <div class="pot-button">
    <button ref="buttonRef" class="pot-button__original">
      {{ props.text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ButtonProps } from './button'

defineOptions({
  name: 'PotButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  text: 'PotButton',
})
</script>
