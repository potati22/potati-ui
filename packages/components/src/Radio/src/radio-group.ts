import type RadioGroup from './radio-group.vue'

export interface RadioGroupProps {
  modelValue: string
}

export type RadioGroupEmits = {
  'update:modelValue': [value: string]
}

export type RadioGroupInstance = InstanceType<typeof RadioGroup>
