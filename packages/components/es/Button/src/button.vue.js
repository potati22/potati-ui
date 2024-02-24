import {
  defineComponent as e,
  openBlock as n,
  createElementBlock as r,
  createElementVNode as s,
  toDisplayString as a,
} from 'vue'
const c = { class: 'pot-button' },
  _ = /* @__PURE__ */ e({
    name: 'PotButton',
    __name: 'button',
    props: {
      text: { default: 'PotButton' },
    },
    setup(t) {
      const o = t
      return (p, u) => (
        n(),
        r('div', c, [
          s(
            'button',
            {
              ref: 'buttonRef',
              class: 'pot-button__original',
            },
            a(o.text),
            513,
          ),
        ])
      )
    },
  })
export { _ as default }
