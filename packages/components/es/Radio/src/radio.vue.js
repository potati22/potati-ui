import {
  defineComponent as m,
  ref as p,
  onMounted as v,
  watch as f,
  openBlock as n,
  createElementBlock as u,
  Fragment as _,
  renderList as h,
  createElementVNode as d,
  normalizeClass as V,
  toDisplayString as g,
} from 'vue'
const k = { class: 'pot-radio' },
  y = ['id', 'name', 'value'],
  S = ['for'],
  x = /* @__PURE__ */ m({
    name: 'PotRadio',
    __name: 'radio',
    props: {
      name: { default: void 0 },
      options: { default: void 0 },
      modelValue: { default: void 0 },
    },
    emits: ['update:modelValue'],
    setup(i, { emit: r }) {
      const t = i,
        s = r,
        o = p('')
      v(() => {
        o.value = t.modelValue
      }),
        f(
          () => t.modelValue,
          (a) => {
            o.value = a
          },
        )
      function c(a) {
        const l = a.target
        o.value != l.value &&
          (s('update:modelValue', l.value), (o.value = l.value))
      }
      return (a, l) => (
        n(),
        u('div', k, [
          (n(!0),
          u(
            _,
            null,
            h(
              t.options,
              (e) => (
                n(),
                u(
                  'div',
                  {
                    key: e.id,
                  },
                  [
                    d(
                      'input',
                      {
                        id: e.id.toString(),
                        type: 'radio',
                        name: t.name,
                        value: e.value,
                        onFocus: c,
                      },
                      null,
                      40,
                      y,
                    ),
                    d(
                      'label',
                      {
                        for: e.id.toString(),
                        class: V([
                          'pot-radio--item',
                          { 'pot-radio--item_checked': e.value === o.value },
                        ]),
                      },
                      g(e.label),
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
export { x as default }
