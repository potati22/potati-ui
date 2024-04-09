<template>
  <label
    class="pot-radio"
    :class="{
      'pot-radio_checked': props.value === radioGroup.checkedValue.value,
    }"
  >
    <input
      type="radio"
      :name="radioGroup.name"
      :value="props.value"
      @focus="focusThis"
    />
    <slot />
  </label>
</template>

<script setup lang="ts">
import { RadioProps } from './radio'
import { radioGroupKey, injectStrict } from './constants'

defineOptions({
  name: 'PotRadio',
})

const props = withDefaults(defineProps<RadioProps>(), {
  value: '',
})

const radioGroup = injectStrict(radioGroupKey)

function focusThis(e: FocusEvent) {
  const target = e.target as HTMLInputElement
  radioGroup.changeRadioValue(target.value)
}
</script>
