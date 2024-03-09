export declare const PotRadio: import('../utils/install').SFCWithInstall<
  import('vue').DefineComponent<
    {
      name: {
        type: import('vue').PropType<string>
        required: true
        default: string
      }
      options: {
        type: import('vue').PropType<import('./src/radio').RadioOptionsItem[]>
        required: true
        default: () => {
          id: number
          value: string
          label: string
        }[]
      }
      modelValue: {
        type: import('vue').PropType<string>
        required: true
        default: string
      }
    },
    {},
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
      'update:modelValue': (value: string) => void
    },
    string,
    import('vue').PublicProps,
    Readonly<
      import('vue').ExtractPropTypes<{
        name: {
          type: import('vue').PropType<string>
          required: true
          default: string
        }
        options: {
          type: import('vue').PropType<import('./src/radio').RadioOptionsItem[]>
          required: true
          default: () => {
            id: number
            value: string
            label: string
          }[]
        }
        modelValue: {
          type: import('vue').PropType<string>
          required: true
          default: string
        }
      }>
    > & {
      'onUpdate:modelValue'?: ((value: string) => any) | undefined
    },
    {
      name: string
      options: import('./src/radio').RadioOptionsItem[]
      modelValue: string
    },
    {}
  >
> &
  Record<string, any>
export default PotRadio
export * from './src/radio.vue'
export * from './src/radio'
