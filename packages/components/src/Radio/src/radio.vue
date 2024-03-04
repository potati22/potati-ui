<template>
  <div class="pot-radio">
    <div v-for="item in props.options" :key="item.id">
      <input
        :id="item.id.toString()"
        type="radio"
        :name="props.name"
        :value="item.value"
        @focus="focusThis"
      />
      <label
        :for="item.id.toString()"
        class="pot-radio--item"
        :class="{ 'pot-radio--item_checked': item.id.toString() === checkedId }"
        >{{ item.label }}</label
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioProps, RadioEmits } from './radio'
import { ref } from 'vue'

defineOptions({
  name: 'PotRadio',
})

const props = withDefaults(defineProps<RadioProps>(), {
  name: undefined,
  options: undefined,
  modelValue: undefined,
})

const emit = defineEmits<RadioEmits>()

const checkedId = ref('')
let lastFocusValue = ''

function focusThis(e: FocusEvent) {
  const target = e.target as HTMLInputElement
  if (lastFocusValue == target.value) return
  emit('update:modelValue', target.value)
  lastFocusValue = target.value
  checkedId.value = target.id
}
</script>
