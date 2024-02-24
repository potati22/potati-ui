'use strict'
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
const n = (t, o) => {
    if (
      ((t.install = (l) => {
        for (const e of [t, ...Object.values(o ?? {})]) l.component(e.name, e)
      }),
      o)
    )
      for (const [l, e] of Object.entries(o)) t[l] = e
    return t
  },
  s = (t = []) => ({
    install: (l) => {
      t.forEach((e) => l.use(e))
    },
  })
exports.makeInstaller = s
exports.withInstall = n
