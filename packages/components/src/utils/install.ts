import type { App, Plugin, AppContext } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

// 把组件封装成了一个可被安装，带install方法的vue插件
export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E,
) => {
  ;(main as SFCWithInstall<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }

  return main as SFCWithInstall<T> & E
}

// 一个支持组件整体导入的插件
export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => app.use(c))
  }
  return {
    install,
  }
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    ;(fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}
