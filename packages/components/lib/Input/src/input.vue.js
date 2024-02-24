'use strict'
const e = require('vue'),
  r = { class: 'pot-input' },
  m = ['disabled'],
  f = e.defineComponent({
    name: 'PotInput',
    __name: 'input',
    props: {
      modelValue: { default: '' },
      disabled: { type: Boolean, default: !1 },
    },
    emits: ['update:modelValue'],
    setup(l, { expose: u, emit: a }) {
      const p = a,
        d = l,
        o = e.computed({
          get: () => d.modelValue,
          set: (t) => p('update:modelValue', t),
        }),
        s = e.ref()
      function i() {
        var t
        ;(t = s.value) == null || t.focus()
      }
      return (
        u({ focus: i }),
        (t, n) => (
          e.openBlock(),
          e.createElementBlock('div', r, [
            e.withDirectives(
              e.createElementVNode(
                'input',
                {
                  ref_key: 'inputRef',
                  ref: s,
                  'onUpdate:modelValue': n[0] || (n[0] = (c) => (o.value = c)),
                  class: 'pot-input__control',
                  type: 'text',
                  disabled: t.$props.disabled,
                },
                null,
                8,
                m,
              ),
              [[e.vModelText, o.value]],
            ),
          ])
        )
      )
    },
  })
module.exports = f
