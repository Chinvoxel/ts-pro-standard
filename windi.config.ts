import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  // 插件
  plugins: [formsPlugin],
  // 属性模式
  attributify: {
    prefix: 'w:' // 属性前缀
  },
  // 别名配置
  alias: {
    hstack: 'flex items-center',
    vstack: 'flex flex-col',
    icon: 'w-6 h-6 fill-current',
    'app-border': 'border-gray-200 dark:border-dark-300'
  }
})
