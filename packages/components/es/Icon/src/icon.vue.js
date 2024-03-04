import {
  defineComponent as t,
  computed as c,
  openBlock as s,
  createElementBlock as r,
  createElementVNode as a,
} from 'vue'
const l = { class: 'pot-icon' },
  i = ['xlink:href'],
  _ = /* @__PURE__ */ t({
    name: 'PotIcon',
    __name: 'icon',
    props: {
      iconClass: { default: '' },
    },
    setup(e) {
      const o = e,
        n = c(() => `#icon-${o.iconClass}`)
      return (p, m) => (
        s(), r('svg', l, [a('use', { 'xlink:href': n.value }, null, 8, i)])
      )
    },
  })
export { _ as default }
