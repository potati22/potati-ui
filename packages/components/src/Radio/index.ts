import { withInstall } from '../utils/install'
import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'

export const PotRadio = withInstall(Radio)
export const PotRadioGroup = withInstall(RadioGroup)

export * from './src/radio.vue'
export * from './src/radio'
export * from './src/radio-group.vue'
export * from './src/radio-group'
