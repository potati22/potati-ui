function PotatiResolver() {
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Pot')) {
        const partialName = name.slice(3)
        return {
          name: 'Pot' + partialName,
          from: '@potati/components',
          sideEffects: `@potati/components/es/${partialName}/style/index.css`,
        }
      }
    },
  }
}

module.exports = {
  PotatiResolver,
}
