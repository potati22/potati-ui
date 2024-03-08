import { RadioOptionsItem } from './Radio/index'
import {
  CreateComponentPublicInstance,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
  ComponentOptionsBase,
  DefineComponent,
  PublicProps,
} from 'vue'
import { SFCWithInstall } from './utils/install'
declare const _default: (
  | (SFCWithInstall<
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
      Record<string, any>)
  | (SFCWithInstall<
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
      Record<string, any>)
  | (SFCWithInstall<
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
      Record<string, any>)
)[]
export default _default
