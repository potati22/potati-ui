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
        :class="{ 'pot-radio--item_checked': item.value === checkedValue }"
        >{{ item.label }}</label
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioProps, RadioEmits } from './radio'
import { ref, watch } from 'vue'

defineOptions({
  name: 'PotRadio',
})

const props = withDefaults(defineProps<RadioProps>(), {
  name: undefined,
  options: undefined,
  modelValue: undefined,
})

const emit = defineEmits<RadioEmits>()

const checkedValue = ref('')

watch(
  () => props.modelValue,
  (newVal) => {
    checkedValue.value = newVal
  },
)

function focusThis(e: FocusEvent) {
  const target = e.target as HTMLInputElement
  if (checkedValue.value == target.value) return
  emit('update:modelValue', target.value)
  checkedValue.value = target.value
}
</script>
