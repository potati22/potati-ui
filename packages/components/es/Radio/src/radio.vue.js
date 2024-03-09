import {
  defineComponent as p,
  ref as m,
  onMounted as v,
  watch as f,
  openBlock as n,
  createElementBlock as u,
  Fragment as _,
  renderList as h,
  createElementVNode as i,
  normalizeClass as V,
  toDisplayString as k,
} from 'vue'
const b = { class: 'pot-radio' },
  g = ['id', 'name', 'value'],
  y = ['for'],
  B = /* @__PURE__ */ p({
    name: 'PotRadio',
    __name: 'radio',
    props: {
      name: { default: 'PotRadio' },
      options: {
        default: () => [
          {
            id: 1,
            value: 'option1',
            label: 'option1',
          },
          {
            id: 2,
            value: 'option2',
            label: 'option2',
          },
        ],
      },
      modelValue: { default: 'option1' },
    },
    emits: ['update:modelValue'],
    setup(d, { emit: r }) {
      const e = d,
        s = r,
        a = m('')
      v(() => {
        a.value = e.modelValue
      }),
        f(
          () => e.modelValue,
          (t) => {
            a.value = t
          },
        )
      function c(t) {
        const l = t.target
        a.value != l.value &&
          (s('update:modelValue', l.value), (a.value = l.value))
      }
      return (t, l) => (
        n(),
        u('div', b, [
          (n(!0),
          u(
            _,
            null,
            h(
              e.options,
              (o) => (
                n(),
                u(
                  'div',
                  {
                    key: o.id,
                  },
                  [
                    i(
                      'input',
                      {
                        id: e.name + o.id,
                        type: 'radio',
                        name: e.name,
                        value: o.value,
                        onFocus: c,
                      },
                      null,
                      40,
                      g,
                    ),
                    i(
                      'label',
                      {
                        for: e.name + o.id,
                        class: V([
                          'pot-radio--item',
                          { 'pot-radio--item_checked': o.value === a.value },
                        ]),
                      },
                      k(o.label),
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
export { B as default }
