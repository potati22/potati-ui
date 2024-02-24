import type Input from './input.vue'

export interface InputProps {
  modelValue: string
  disabled?: boolean
}

export type InputEmits = {
  'update:modelValue': [value: string]
}

export type InputInstance = InstanceType<typeof Input>
