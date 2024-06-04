import { createApp } from 'vue'
import App from './App.vue'

// 完整导入
/* import '@potati/components/es/style'
import PotComponents from '@potati/components'

createApp(App).use(PotComponents).mount('#app') */

// 按需导入
const app = createApp(App)
app.mount('#app')
