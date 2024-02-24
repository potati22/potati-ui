'use strict'
const t = require('vue'),
  n = { class: 'pot-button' },
  s = t.defineComponent({
    name: 'PotButton',
    __name: 'button',
    props: { text: { default: 'PotButton' } },
    setup(e) {
      const o = e
      return (c, r) => (
        t.openBlock(),
        t.createElementBlock('div', n, [
          t.createElementVNode(
            'button',
            { ref: 'buttonRef', class: 'pot-button__original' },
            t.toDisplayString(o.text),
            513,
          ),
        ])
      )
    },
  })
module.exports = s
