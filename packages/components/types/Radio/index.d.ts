import { RadioOptionsItem } from './src/radio'
import {
  DefineComponent,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ExtractPropTypes,
} from 'vue'
import { SFCWithInstall } from '../utils/install'
export declare const PotRadio: SFCWithInstall<
  DefineComponent<
    {
      name: {
        type: PropType<string>
        required: true
        default: undefined
      }
      options: {
        type: PropType<RadioOptionsItem[]>
        required: true
        default: undefined
      }
      modelValue: {
        type: PropType<string>
        required: true
        default: undefined
      }
    },
    {},
    unknown,
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:modelValue': (value: string) => void
    },
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<{
        name: {
          type: PropType<string>
          required: true
          default: undefined
        }
        options: {
          type: PropType<RadioOptionsItem[]>
          required: true
          default: undefined
        }
        modelValue: {
          type: PropType<string>
          required: true
          default: undefined
        }
      }>
    > & {
      'onUpdate:modelValue'?: ((value: string) => any) | undefined
    },
    {
      name: string
      options: RadioOptionsItem[]
      modelValue: string
    },
    {}
  >
> &
  Record<string, any>
export default PotRadio
export * from './src/radio.vue'
export * from './src/radio'
