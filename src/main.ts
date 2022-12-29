import { createApp } from 'vue'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
// scss
import '@/style/index.scss'

import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
