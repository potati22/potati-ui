import {
  DefineComponent,
  ComponentOptionsMixin,
  PublicProps,
  ExtractPropTypes,
  PropType,
} from 'vue'
import { ButtonProps } from './button'
declare const _default: __VLS_WithTemplateSlots<
  DefineComponent<
    __VLS_WithDefaults<
      __VLS_TypePropsToRuntimeProps<ButtonProps>,
      {
        type: undefined
      }
    >,
    {},
    unknown,
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    PublicProps,
    Readonly<
      ExtractPropTypes<
        __VLS_WithDefaults<
          __VLS_TypePropsToRuntimeProps<ButtonProps>,
          {
            type: undefined
          }
        >
      >
    >,
    {
      type: 'yellow'
    },
    {}
  >,
  {
    default?(_: {}): any
  }
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
type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S
  }
}
