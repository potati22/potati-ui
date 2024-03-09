declare const _default: (
  | (import('./utils/install').SFCWithInstall<
      {
        new (...args: any[]): import('vue').CreateComponentPublicInstance<
          Readonly<
            import('vue').ExtractPropTypes<{
              type: {
                type: import('vue').PropType<'yellow'>
                default: undefined
              }
            }>
          >,
          {},
          unknown,
          {},
          {},
          import('vue').ComponentOptionsMixin,
          import('vue').ComponentOptionsMixin,
          {},
          import('vue').VNodeProps &
            import('vue').AllowedComponentProps &
            import('vue').ComponentCustomProps &
            Readonly<
              import('vue').ExtractPropTypes<{
                type: {
                  type: import('vue').PropType<'yellow'>
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
            import('vue').ExtractPropTypes<{
              type: {
                type: import('vue').PropType<'yellow'>
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
      } & import('vue').ComponentOptionsBase<
        Readonly<
          import('vue').ExtractPropTypes<{
            type: {
              type: import('vue').PropType<'yellow'>
              default: undefined
            }
          }>
        >,
        {},
        unknown,
        {},
        {},
        import('vue').ComponentOptionsMixin,
        import('vue').ComponentOptionsMixin,
        {},
        string,
        {
          type: 'yellow'
        },
        {},
        string,
        {}
      > &
        import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps &
        (new () => {
          $slots: {
            default?(_: {}): any
          }
        })
    > &
      Record<string, any>)
  | (import('./utils/install').SFCWithInstall<
      import('vue').DefineComponent<
        {
          iconClass: {
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
        {},
        string,
        import('vue').PublicProps,
        Readonly<
          import('vue').ExtractPropTypes<{
            iconClass: {
              type: import('vue').PropType<string>
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
  | (import('./utils/install').SFCWithInstall<
      import('vue').DefineComponent<
        {
          name: {
            type: import('vue').PropType<string>
            required: true
            default: string
          }
          options: {
            type: import('vue').PropType<
              import('./Radio/index').RadioOptionsItem[]
            >
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
              type: import('vue').PropType<
                import('./Radio/index').RadioOptionsItem[]
              >
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
          options: import('./Radio/index').RadioOptionsItem[]
          modelValue: string
        },
        {}
      >
    > &
      Record<string, any>)
)[]
export default _default
