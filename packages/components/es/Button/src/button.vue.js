import {
  defineComponent as p,
  computed as e,
  openBlock as s,
  createElementBlock as l,
  normalizeClass as u,
  renderSlot as c,
  createTextVNode as f,
  toDisplayString as m,
} from 'vue'
const i = /* @__PURE__ */ p({
  name: 'PotButton',
  __name: 'button',
  props: {
    type: { default: void 0 },
  },
  setup(o) {
    const t = o,
      n = e(() => ({
        [`pot-button--${t.type}`]: t.type,
      })),
      r = e(() =>
        t.type
          ? t.type.replace(t.type.charAt(0), t.type.charAt(0).toUpperCase())
          : 'Default',
      )
    return (a, d) => (
      s(),
      l(
        'button',
        {
          ref: 'buttonRef',
          class: u(['pot-button', n.value]),
        },
        [c(a.$slots, 'default', {}, () => [f(m(r.value), 1)])],
        2,
      )
    )
  },
})
export { i as default }
