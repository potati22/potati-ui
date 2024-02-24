// 用于给vscode的volar插件提示我们组件的属性的类型
declare module 'vue' {
  export interface GlobalComponents {
    PotInput: typeof import('@potati/components')['PotInput']
    PotButton: typeof import('@potati/components')['PotButton']
  }
}

export {}
