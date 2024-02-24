import type Button from './button.vue'

export interface ButtonProps {
  text: string
}

export type ButtonInstance = InstanceType<typeof Button>
