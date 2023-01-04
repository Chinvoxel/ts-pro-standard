import { createApp } from 'vue'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// pinia
import pinia from '@/store'
// windicss
import 'virtual:windi.css'
// scss
import '@/style/index.scss'
// router
import router from '@/router'

import App from './App.vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
