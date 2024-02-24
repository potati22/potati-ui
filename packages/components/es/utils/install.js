const e = (t, s) => {
    if (
      ((t.install = (n) => {
        for (const o of [t, ...Object.values(s ?? {})]) n.component(o.name, o)
      }),
      s)
    )
      for (const [n, o] of Object.entries(s)) t[n] = o
    return t
  },
  c = (t = []) => ({
    install: (n) => {
      t.forEach((o) => n.use(o))
    },
  })
export { c as makeInstaller, e as withInstall }
