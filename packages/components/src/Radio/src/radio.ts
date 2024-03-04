import type Radio from './radio.vue'

export interface RadioOptionsItem {
  id: number
  value: string
  label: string
}

export interface RadioProps {
  name: string
  options: RadioOptionsItem[]
  modelValue: string
}

export type RadioEmits = {
  'update:modelValue': [value: string]
}

export type RadioInstance = InstanceType<typeof Radio>
