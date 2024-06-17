/// <reference types="vite/client" />

function PotatiComponentResolver() {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Pot')) {
        const partialName = name.slice(3)
        return {
          name: 'Pot' + partialName,
          from: `@potati/components${import.meta.env.VITE_COMPONENT_FORM}`,
          sideEffects: `@potati/components${
            import.meta.env.VITE_STYLE_FORM
          }/${partialName}/style/index`,
        }
      }
    },
  }
}

function PotatiDirectiveResolver() {
  return {
    type: 'directive',
    resolve: (name: string) => {
      const directives: Record<
        string,
        { importName: string; styleName: string }
      > = {
        InfiniteScroll: {
          importName: 'PotInfiniteScroll',
          styleName: 'InfiniteScroll',
        },
      }
      if (name in directives) {
        return {
          name: directives[name].importName,
          from: `@potati/components${import.meta.env.VITE_COMPONENT_FORM}`,
          sideEffects: `@potati/components${import.meta.env.VITE_STYLE_FORM}/${
            directives[name].styleName
          }/style/index`,
        }
      }
    },
  }
}

module.exports = {
  PotatiComponentResolver,
  PotatiDirectiveResolver,
}
