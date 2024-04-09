<template>
  <div class="pot-radio-group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue'

import { radioGroupKey } from './constants'
import { RadioGroupProps, RadioGroupEmits } from './radio-group'
import { useId } from '../../utils/useId'

defineOptions({
  name: 'PotRadioGroup',
})

const props = withDefaults(defineProps<RadioGroupProps>(), {
  modelValue: '',
})
const emits = defineEmits<RadioGroupEmits>()

const checkedValue = computed(() => {
  return props.modelValue
})

provide(radioGroupKey, {
  name: useId('radio-group-name'),
  changeRadioValue: (value: string) => {
    emits('update:modelValue', value)
  },
  checkedValue,
})
</script>
