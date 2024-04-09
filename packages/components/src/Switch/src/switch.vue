<template>
  <div
    ref="switchRef"
    class="pot-switch"
    :class="[props.modelValue ? 'pot-switch_on' : 'pot-switch_off']"
    @click="changeSwitchValue"
  >
    <div
      class="pot-switch--core"
      :class="[
        props.modelValue ? 'pot-switch--core_on' : 'pot-switch--core_off',
      ]"
      :style="{
        '--pot-switch-core-height': `${switchRefHeight - 4}px`,
        '--pot-switch-core-left': `calc(100% - ${switchRefHeight - 3}px)`,
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import type { Ref } from 'vue'
import { SwitchProps, SwitchEmits } from './switch'

defineOptions({
  name: 'PotSwitch',
})

const switchRef: Ref<HTMLDivElement | null> = ref(null)
const switchRefHeight = ref(0)

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
})

const emits = defineEmits<SwitchEmits>()

onMounted(() => {
  if (!switchRef.value) return
  switchRefHeight.value = switchRef.value.clientHeight
})

function changeSwitchValue() {
  emits('update:modelValue', !props.modelValue)
}
</script>
