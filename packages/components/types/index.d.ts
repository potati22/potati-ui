import { AllowedComponentProps } from 'vue'
import { App } from 'vue'
import { ComponentCustomProps } from 'vue'
import { ComponentOptionsBase } from 'vue'
import { ComponentOptionsMixin } from 'vue'
import { CreateComponentPublicInstance } from 'vue'
import { DefineComponent } from 'vue'
import { ExtractPropTypes } from 'vue'
import type { Plugin as Plugin_2 } from 'vue'
import { PropType } from 'vue'
import { PublicProps } from 'vue'
import { VNodeProps } from 'vue'

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T

declare type __VLS_Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

declare type __VLS_Prettify_2<T> = {
  [K in keyof T]: T[K]
} & {}

declare type __VLS_Prettify_3<T> = {
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

declare type __VLS_TypePropsToRuntimeProps_3<T> = {
  [K in keyof T]-?: {} extends Pick<T, K>
    ? {
        type: PropType<__VLS_NonUndefinedable_3<T[K]>>
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

declare type __VLS_WithDefaults_3<P, D> = {
  [K in keyof Pick<P, keyof P>]: K extends keyof D
    ? __VLS_Prettify_3<
        P[K] & {
          default: D[K]
        }
      >
    : P[K]
}

declare type __VLS_WithTemplateSlots<T, S> = T & {
  new (): {
    $slots: S
  }
}

export declare type ButtonInstance = InstanceType<typeof _default_3>

export declare interface ButtonProps {
  type?: 'yellow'
}

declare const _default: {
  install: (app: App<any>) => void
}
export default _default

declare const _default_2: DefineComponent<
  __VLS_WithDefaults<
    __VLS_TypePropsToRuntimeProps<IconProps>,
    {
      iconClass: string
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
        __VLS_TypePropsToRuntimeProps<IconProps>,
        {
          iconClass: string
        }
      >
    >
  >,
  {
    iconClass: string
  },
  {}
>

declare const _default_3: __VLS_WithTemplateSlots<
  DefineComponent<
    __VLS_WithDefaults_2<
      __VLS_TypePropsToRuntimeProps_2<ButtonProps>,
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
        __VLS_WithDefaults_2<
          __VLS_TypePropsToRuntimeProps_2<ButtonProps>,
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

declare const _default_4: DefineComponent<
  __VLS_WithDefaults_3<
    __VLS_TypePropsToRuntimeProps_3<RadioProps>,
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
      __VLS_WithDefaults_3<
        __VLS_TypePropsToRuntimeProps_3<RadioProps>,
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

export declare type IconInstance = InstanceType<typeof _default_2>

export declare interface IconProps {
  iconClass: string
}

export declare const PotButton: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstance<
      Readonly<
        ExtractPropTypes<{
          type: {
            type: PropType<'yellow'>
            default: undefined
          }
        }>
      >,
      {},
      unknown,
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      VNodeProps &
        AllowedComponentProps &
        ComponentCustomProps &
        Readonly<
          ExtractPropTypes<{
            type: {
              type: PropType<'yellow'>
              default: undefined
            }
          }>
        >,
      {
        type: 'yellow'
      },
      true,
      {},
      {},
      {
        P: {}
        B: {}
        D: {}
        C: {}
        M: {}
        Defaults: {}
      },
      Readonly<
        ExtractPropTypes<{
          type: {
            type: PropType<'yellow'>
            default: undefined
          }
        }>
      >,
      {},
      {},
      {},
      {},
      {
        type: 'yellow'
      }
    >
    __isFragment?: undefined
    __isTeleport?: undefined
    __isSuspense?: undefined
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        type: {
          type: PropType<'yellow'>
          default: undefined
        }
      }>
    >,
    {},
    unknown,
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    {
      type: 'yellow'
    },
    {},
    string,
    {}
  > &
    VNodeProps &
    AllowedComponentProps &
    ComponentCustomProps &
    (new () => {
      $slots: {
        default?(_: {}): any
      }
    })
> &
  Record<string, any>

export declare const PotIcon: SFCWithInstall<
  DefineComponent<
    {
      iconClass: {
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
        iconClass: {
          type: PropType<string>
          required: true
          default: string
        }
      }>
    >,
    {
      iconClass: string
    },
    {}
  >
> &
  Record<string, any>

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

export declare type RadioEmits = {
  'update:modelValue': [value: string]
}

export declare type RadioInstance = InstanceType<typeof _default_4>

export declare interface RadioOptionsItem {
  id: number
  value: string
  label: string
}

export declare interface RadioProps {
  name: string
  options: RadioOptionsItem[]
  modelValue: string
}

declare type SFCWithInstall<T> = T & Plugin_2

export {}
