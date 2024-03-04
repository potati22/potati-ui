import type Icon from './icon.vue'

export interface IconProps {
  iconClass: string
}

export type IconInstance = InstanceType<typeof Icon>
