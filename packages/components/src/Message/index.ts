import { withInstallFunction } from '../utils/install'
import message from './src/method'

export const PotMessage = withInstallFunction(message, '$message')
export default PotMessage

export * from './src/message.vue'
export * from './src/message'
