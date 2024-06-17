import {
  d as r,
  f as l,
  N as o,
  o as k,
  a as e,
  k as a,
  $ as E,
} from './chunks/framework.D7pjZlIy.js'
const g = r({
    __name: 'basic',
    setup(d) {
      const t = l(!0),
        n = l(!0),
        p = l(!0)
      return (u, s) => {
        const h = o('PotSwitch')
        return (
          k(),
          e('div', null, [
            a(
              h,
              {
                modelValue: t.value,
                'onUpdate:modelValue': s[0] || (s[0] = (i) => (t.value = i)),
              },
              null,
              8,
              ['modelValue'],
            ),
            a(
              h,
              {
                modelValue: n.value,
                'onUpdate:modelValue': s[1] || (s[1] = (i) => (n.value = i)),
                style: { '--pot-switch-bg-color-on': '#13ce66' },
              },
              null,
              8,
              ['modelValue'],
            ),
            a(
              h,
              {
                modelValue: p.value,
                'onUpdate:modelValue': s[2] || (s[2] = (i) => (p.value = i)),
                style: {
                  '--pot-switch-bg-color-on': '#ff4949',
                  '--pot-switch-width': '60px',
                  '--pot-switch-height': '30px',
                },
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
  c = E('', 6),
  y = E('', 4),
  m = JSON.parse(
    '{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md"}',
  ),
  F = { name: 'components/switch.md' },
  _ = Object.assign(F, {
    setup(d) {
      return (t, n) => (k(), e('div', null, [c, a(g), y]))
    },
  })
export { m as __pageData, _ as default }
