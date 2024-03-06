/// <reference types="vite/client" />

function PotatiResolver() {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Pot')) {
        const partialName = name.slice(3)
        return {
          name: 'Pot' + partialName,
          from: `@potati/components/${import.meta.env.VITE_IMPORT_FORM}`,
          sideEffects: `@potati/components/${
            import.meta.env.VITE_IMPORT_FORM
          }/${partialName}/style/index`,
        }
      }
    },
  }
}

module.exports = {
  PotatiResolver,
}
