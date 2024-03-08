'use strict'
function o() {
  return {
    type: 'component',
    resolve: (t) => {
      if (t.startsWith('Pot')) {
        const e = t.slice(3)
        return {
          name: 'Pot' + e,
          from: '@potati/components',
          sideEffects: `@potati/components/es/${e}/style/index`,
        }
      }
    },
  }
}
module.exports = { PotatiResolver: o }
