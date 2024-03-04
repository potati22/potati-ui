import DefaultTheme from 'vitepress/theme'

import PotatiUI from '@potati/components'
// import '@potati/theme-chalk'
import '@potati/components/es/style'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PotatiUI)
  },
}
