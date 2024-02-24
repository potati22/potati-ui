import {
  defineComponent as c,
  computed as m,
  ref as r,
  openBlock as f,
  createElementBlock as _,
  withDirectives as v,
  createElementVNode as V,
  vModelText as b,
} from 'vue'
const x = { class: 'pot-input' },
  k = ['disabled'],
  B = /* @__PURE__ */ c({
    name: 'PotInput',
    __name: 'input',
    props: {
      modelValue: { default: '' },
      disabled: { type: Boolean, default: !1 },
    },
    emits: ['update:modelValue'],
    setup(n, { expose: s, emit: a }) {
      const u = a,
        p = n,
        t = m({
          get: () => p.modelValue,
          set: (e) => u('update:modelValue', e),
        }),
        o = r()
      function d() {
        var e
        ;(e = o.value) == null || e.focus()
      }
      return (
        s({
          focus: d,
        }),
        (e, l) => (
          f(),
          _('div', x, [
            v(
              V(
                'input',
                {
                  ref_key: 'inputRef',
                  ref: o,
                  'onUpdate:modelValue': l[0] || (l[0] = (i) => (t.value = i)),
                  class: 'pot-input__control',
                  type: 'text',
                  disabled: e.$props.disabled,
                },
                null,
                8,
                k,
              ),
              [[b, t.value]],
            ),
          ])
        )
      )
    },
  })
export { B as default }
