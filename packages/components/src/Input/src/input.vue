<template>
  <div class="pot-input">
    <input
      ref="inputRef"
      v-model="state"
      class="pot-input__control"
      type="text"
      :disabled="$props.disabled"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { InputProps, InputEmits } from './input'

defineOptions({
  name: 'PotInput',
})

const emit = defineEmits<InputEmits>()

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  disabled: false,
})

const state = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const inputRef = ref<HTMLInputElement>()

function focus() {
  inputRef.value?.focus()
}

defineExpose({
  focus,
})
</script>
