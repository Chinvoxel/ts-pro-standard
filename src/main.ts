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
// 错误日志
import errorHandler from '@/error'
import App from './App.vue'

const app = createApp(App)
// element icon 引入
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.config.performance = true // 性能分析

app.use(errorHandler)
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
// router.isReady().then(() => app.mount('#app'))
