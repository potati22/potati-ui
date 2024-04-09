import { inject } from 'vue'

import type { InjectionKey, Ref } from 'vue'

export const radioGroupKey = Symbol('radio-group') as InjectionKey<{
  name: string
  changeRadioValue: (value: string) => void
  checkedValue: Ref<string>
}>

export function injectStrict<T>(key: InjectionKey<T>, defaultValue?: T): T {
  const result = inject(key, defaultValue)
  if (!result) throw new Error('该组件的上游组件需注入正确的值')
  return result
}
