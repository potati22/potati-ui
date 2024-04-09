import DefaultTheme from 'vitepress/theme'

// 开发使用
import PotatiUI from '@potati/components/src'
import '@potati/components/src/style'

// 生产使用
/* import PotatiUI from '@potati/components'
import '@potati/components/es/style' */

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PotatiUI)
  },
}
