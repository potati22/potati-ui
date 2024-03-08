import {
  CreateComponentPublicInstance,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
  ComponentOptionsBase,
} from 'vue'
import { SFCWithInstall } from '../utils/install'
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
export default PotButton
export * from './src/button.vue'
export * from './src/button'
