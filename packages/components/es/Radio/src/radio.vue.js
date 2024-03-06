import {
  defineComponent as p,
  ref as m,
  watch as v,
  openBlock as n,
  createElementBlock as d,
  Fragment as f,
  renderList as _,
  createElementVNode as i,
  normalizeClass as h,
  toDisplayString as g,
} from 'vue'
const V = { class: 'pot-radio' },
  k = ['id', 'name', 'value'],
  y = ['for'],
  b = /* @__PURE__ */ p({
    name: 'PotRadio',
    __name: 'radio',
    props: {
      name: { default: void 0 },
      options: { default: void 0 },
      modelValue: { default: void 0 },
    },
    emits: ['update:modelValue'],
    setup(u, { emit: r }) {
      const l = u,
        s = r,
        o = m('')
      v(
        () => l.modelValue,
        (t) => {
          o.value = t
        },
      )
      function c(t) {
        const a = t.target
        o.value != a.value &&
          (s('update:modelValue', a.value), (o.value = a.value))
      }
      return (t, a) => (
        n(),
        d('div', V, [
          (n(!0),
          d(
            f,
            null,
            _(
              l.options,
              (e) => (
                n(),
                d(
                  'div',
                  {
                    key: e.id,
                  },
                  [
                    i(
                      'input',
                      {
                        id: e.id.toString(),
                        type: 'radio',
                        name: l.name,
                        value: e.value,
                        onFocus: c,
                      },
                      null,
                      40,
                      k,
                    ),
                    i(
                      'label',
                      {
                        for: e.id.toString(),
                        class: h([
                          'pot-radio--item',
                          { 'pot-radio--item_checked': e.value === o.value },
                        ]),
                      },
                      g(e.label),
                      11,
                      y,
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
export { b as default }
