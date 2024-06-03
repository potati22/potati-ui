// 用于给vscode的volar插件提示我们组件的属性的类型
declare module 'vue' {
  export interface GlobalComponents {
    PotButton: typeof import('@potati/components')['PotButton']
    PotIcon: typeof import('@potati/components')['PotIcon']
    PotRadio: typeof import('@potati/components')['PotRadio']
  }
}

declare module '@potati/components' {}

export {}
