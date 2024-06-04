import {
  B as o,
  a6 as p,
  a7 as u,
  a8 as c,
  a9 as l,
  aa as f,
  ab as d,
  ac as m,
  ad as h,
  ae as g,
  af as A,
  ag as v,
  d as P,
  x as w,
  g as y,
  H as C,
  ah as R,
  ai as _,
  aj as b,
  ak as E,
} from './chunks/framework.CD4fBMdo.js'
import { R as D } from './chunks/theme.D_nzjXxa.js'
function i(e) {
  if (e.extends) {
    const a = i(e.extends)
    return {
      ...a,
      ...e,
      async enhanceApp(t) {
        a.enhanceApp && (await a.enhanceApp(t)),
          e.enhanceApp && (await e.enhanceApp(t))
      },
    }
  }
  return e
}
const s = i(D),
  T = P({
    name: 'VitePressApp',
    setup() {
      const { site: e, lang: a, dir: t } = w()
      return (
        y(() => {
          C(() => {
            ;(document.documentElement.lang = a.value),
              (document.documentElement.dir = t.value)
          })
        }),
        e.value.router.prefetchLinks && R(),
        _(),
        b(),
        s.setup && s.setup(),
        () => E(s.Layout)
      )
    },
  })
async function j() {
  const e = L(),
    a = x()
  a.provide(u, e)
  const t = c(e.route)
  return (
    a.provide(l, t),
    a.component('Content', f),
    a.component('ClientOnly', d),
    Object.defineProperties(a.config.globalProperties, {
      $frontmatter: {
        get() {
          return t.frontmatter.value
        },
      },
      $params: {
        get() {
          return t.page.value.params
        },
      },
    }),
    s.enhanceApp && (await s.enhanceApp({ app: a, router: e, siteData: m })),
    { app: a, router: e, data: t }
  )
}
function x() {
  return h(T)
}
function L() {
  let e = o,
    a
  return g((t) => {
    let n = A(t),
      r = null
    return (
      n &&
        (e && (a = n),
        (e || a === n) && (n = n.replace(/\.js$/, '.lean.js')),
        (r = v(() => import(n), __vite__mapDeps([])))),
      o && (e = !1),
      r
    )
  }, s.NotFound)
}
o &&
  j().then(({ app: e, router: a, data: t }) => {
    a.go().then(() => {
      p(a.route, t.site), e.mount('#app')
    })
  })
export { j as createApp }
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
