import {
  defineComponent as m,
  ref as f,
  openBlock as o,
  createElementBlock as a,
  Fragment as v,
  renderList as _,
  createElementVNode as r,
  normalizeClass as g,
  toDisplayString as h,
} from 'vue'
const k = { class: 'pot-radio' },
  V = ['id', 'name', 'value'],
  S = ['for'],
  F = /* @__PURE__ */ m({
    name: 'PotRadio',
    __name: 'radio',
    props: {
      name: { default: void 0 },
      options: { default: void 0 },
      modelValue: { default: void 0 },
    },
    emits: ['update:modelValue'],
    setup(s, { emit: u }) {
      const n = s,
        c = u,
        l = f('')
      let i = ''
      function p(d) {
        const t = d.target
        i != t.value &&
          (c('update:modelValue', t.value), (i = t.value), (l.value = t.id))
      }
      return (d, t) => (
        o(),
        a('div', k, [
          (o(!0),
          a(
            v,
            null,
            _(
              n.options,
              (e) => (
                o(),
                a(
                  'div',
                  {
                    key: e.id,
                  },
                  [
                    r(
                      'input',
                      {
                        id: e.id.toString(),
                        type: 'radio',
                        name: n.name,
                        value: e.value,
                        onFocus: p,
                      },
                      null,
                      40,
                      V,
                    ),
                    r(
                      'label',
                      {
                        for: e.id.toString(),
                        class: g([
                          'pot-radio--item',
                          {
                            'pot-radio--item_checked':
                              e.id.toString() === l.value,
                          },
                        ]),
                      },
                      h(e.label),
                      11,
                      S,
                    ),
                  ],
                )
              ),
            ),
            128,
          )),
        ])
      )
    },
  })
export { F as default }
