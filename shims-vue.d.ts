declare module '*.vue' {
  /* import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions */
  /* import Vue from 'vue'
  export default Vue */
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, any>
  export default component
}
