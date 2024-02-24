import { App } from 'vue'
import { ComponentOptionsMixin } from 'vue'
import { DefineComponent } from 'vue'
import { ExtractPropTypes } from 'vue'
import type { Plugin as Plugin_2 } from 'vue'
import { PropType } from 'vue'
import { PublicProps } from 'vue'

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T

declare type __VLS_Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

declare type __VLS_Prettify_2<T> = {
  [K in keyof T]: T[K]
} & {}

declare type __VLS_TypePropsToRuntimeProps<T> = {
  [K in keyof T]-?: {} extends Pick<T, K>
    ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>
      }
    : {
        type: PropType<T[K]>
        required: true
      }
}

declare type __VLS_TypePropsToRuntimeProps_2<T> = {
  [K in keyof T]-?: {} extends Pick<T, K>
    ? {
        type: PropType<__VLS_NonUndefinedable_2<T[K]>>
      }
    : {
        type: PropType<T[K]>
        required: true
      }
}

declare type __VLS_WithDefaults<P, D> = {
  [K in keyof Pick<P, keyof P>]: K extends keyof D
    ? __VLS_Prettify<
        P[K] & {
          default: D[K]
        }
      >
    : P[K]
}

declare type __VLS_WithDefaults_2<P, D> = {
  [K in keyof Pick<P, keyof P>]: K extends keyof D
    ? __VLS_Prettify_2<
        P[K] & {
          default: D[K]
        }
      >
    : P[K]
}

export declare type ButtonInstance = InstanceType<typeof _default_3>

export declare interface ButtonProps {
  text: string
}

declare const _default: {
  install: (app: App<any>) => void
}
export default _default

declare const _default_2: DefineComponent<
  __VLS_WithDefaults<
    __VLS_TypePropsToRuntimeProps<InputProps>,
    {
      modelValue: string
      disabled: boolean
    }
  >,
  {
    focus: typeof focus_2
  },
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
        __VLS_TypePropsToRuntimeProps<InputProps>,
        {
          modelValue: string
          disabled: boolean
        }
      >
    >
  > & {
    'onUpdate:modelValue'?: ((value: string) => any) | undefined
  },
  {
    modelValue: string
    disabled: boolean
  },
  {}
>

declare const _default_3: DefineComponent<
  __VLS_WithDefaults_2<
    __VLS_TypePropsToRuntimeProps_2<ButtonProps>,
    {
      text: string
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
      __VLS_WithDefaults_2<
        __VLS_TypePropsToRuntimeProps_2<ButtonProps>,
        {
          text: string
        }
      >
    >
  >,
  {
    text: string
  },
  {}
>

declare function focus_2(): void

export declare type InputEmits = {
  'update:modelValue': [value: string]
}

export declare type InputInstance = InstanceType<typeof _default_2>

export declare interface InputProps {
  modelValue: string
  disabled?: boolean
}

export declare const PotButton: SFCWithInstall<
  DefineComponent<
    {
      text: {
        type: PropType<string>
        required: true
        default: string
      }
    },
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
      ExtractPropTypes<{
        text: {
          type: PropType<string>
          required: true
          default: string
        }
      }>
    >,
    {
      text: string
    },
    {}
  >
> &
  Record<string, any>

export declare const PotInput: SFCWithInstall<
  DefineComponent<
    {
      modelValue: {
        type: PropType<string>
        required: true
        default: string
      }
      disabled: {
        type: PropType<boolean>
        default: boolean
      }
    },
    {
      focus: () => void
    },
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
        modelValue: {
          type: PropType<string>
          required: true
          default: string
        }
        disabled: {
          type: PropType<boolean>
          default: boolean
        }
      }>
    > & {
      'onUpdate:modelValue'?: ((value: string) => any) | undefined
    },
    {
      modelValue: string
      disabled: boolean
    },
    {}
  >
> &
  Record<string, any>

declare type SFCWithInstall<T> = T & Plugin_2

export {}
