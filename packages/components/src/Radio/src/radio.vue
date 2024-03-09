<template>
  <div class="pot-radio">
    <div v-for="item in props.options" :key="item.id">
      <input
        :id="props.name + item.id"
        type="radio"
        :name="props.name"
        :value="item.value"
        @focus="focusThis"
      />
      <label
        :for="props.name + item.id"
        class="pot-radio--item"
        :class="{ 'pot-radio--item_checked': item.value === checkedValue }"
        >{{ item.label }}</label
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioProps, RadioEmits } from './radio'
import { onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'PotRadio',
})

const props = withDefaults(defineProps<RadioProps>(), {
  name: 'PotRadio',
  // 复杂类型使用函数形式
  options: () => [
    {
      id: 1,
      value: 'option1',
      label: 'option1',
    },
    {
      id: 2,
      value: 'option2',
      label: 'option2',
    },
  ],
  modelValue: 'option1',
})

const emit = defineEmits<RadioEmits>()

const checkedValue = ref('')
onMounted(() => {
  checkedValue.value = props.modelValue
})

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
