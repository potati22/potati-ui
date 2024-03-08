import {
  DefineComponent,
  ComponentOptionsMixin,
  PublicProps,
  ExtractPropTypes,
  PropType,
} from 'vue'
import { RadioOptionsItem, RadioProps } from './radio'
declare const _default: DefineComponent<
  __VLS_WithDefaults<
    __VLS_TypePropsToRuntimeProps<RadioProps>,
    {
      name: undefined
      options: undefined
      modelValue: undefined
    }
  >,
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
    ExtractPropTypes<
      __VLS_WithDefaults<
        __VLS_TypePropsToRuntimeProps<RadioProps>,
        {
          name: undefined
          options: undefined
          modelValue: undefined
        }
      >
    >
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
export default _default
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T
type __VLS_TypePropsToRuntimeProps<T> = {
  [K in keyof T]-?: {} extends Pick<T, K>
    ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>
      }
    : {
        type: PropType<T[K]>
        required: true
      }
}
type __VLS_WithDefaults<P, D> = {
  [K in keyof Pick<P, keyof P>]: K extends keyof D
    ? __VLS_Prettify<
        P[K] & {
          default: D[K]
        }
      >
    : P[K]
}
type __VLS_Prettify<T> = {
  [K in keyof T]: T[K]
} & {}
