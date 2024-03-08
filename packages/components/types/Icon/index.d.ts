import {
  DefineComponent,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ExtractPropTypes,
} from 'vue'
import { SFCWithInstall } from '../utils/install'
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
export default PotIcon
export * from './src/icon.vue'
export * from './src/icon'
