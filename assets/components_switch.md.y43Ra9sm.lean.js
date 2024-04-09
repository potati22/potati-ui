import {
  d,
  h as l,
  E as r,
  o as e,
  c as p,
  J as n,
  V as k,
} from './chunks/framework.DzsyM-52.js'
const o = d({
    __name: 'basic',
    setup(E) {
      const i = l(!0),
        a = l(!0)
      return (F, s) => {
        const h = r('PotSwitch')
        return (
          e(),
          p('div', null, [
            n(
              h,
              {
                modelValue: i.value,
                'onUpdate:modelValue': s[0] || (s[0] = (t) => (i.value = t)),
              },
              null,
              8,
              ['modelValue'],
            ),
            n(
              h,
              {
                modelValue: a.value,
                'onUpdate:modelValue': s[1] || (s[1] = (t) => (a.value = t)),
                style: { '--pot-switch-bg-color-on': '#13ce66' },
              },
              null,
              8,
              ['modelValue'],
            ),
          ])
        )
      }
    },
  }),
  c = k('', 4),
  g = k('', 4),
  _ = JSON.parse(
    '{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md"}',
  ),
  y = { name: 'components/switch.md' },
  m = Object.assign(y, {
    setup(E) {
      return (i, a) => (e(), p('div', null, [c, n(o), g]))
    },
  })
export { _ as __pageData, m as default }
