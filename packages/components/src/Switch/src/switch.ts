import type Switch from './switch.vue'

export interface SwitchProps {
  modelValue: boolean
}

export type SwitchEmits = {
  'update:modelValue': [value: boolean]
}

export type SwitchInstance = InstanceType<typeof Switch>
