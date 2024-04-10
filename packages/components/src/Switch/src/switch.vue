<template>
  <div
    class="pot-switch"
    :class="[props.modelValue ? 'pot-switch_on' : 'pot-switch_off']"
    @click="changeSwitchValue"
  >
    <div
      class="pot-switch--core"
      :class="[
        props.modelValue ? 'pot-switch--core_on' : 'pot-switch--core_off',
      ]"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { SwitchProps, SwitchEmits } from './switch'

defineOptions({
  name: 'PotSwitch',
})

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
})

const emits = defineEmits<SwitchEmits>()

function changeSwitchValue() {
  emits('update:modelValue', !props.modelValue)
}
</script>
