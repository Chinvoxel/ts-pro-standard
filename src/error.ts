import { ElMessage } from 'element-plus'
import { nextTick } from 'vue'

export default (app: any) => {
  app.config.errorHandler = (err: any, vm: any, info: any) => {
    nextTick(() => {
      console.log('vm: ', vm)
      console.log('info: ', info)
      ElMessage.error(err.message)
    })

    if (process.env.NODE_ENV === 'development') {
      window.console.group('>>>>>> 错误信息 >>>>>>')
      window.console.error(info)
      window.console.groupEnd()
      window.console.group('>>>>>> Vue 实例 >>>>>>')
      window.console.log(vm)
      window.console.groupEnd()
      window.console.group('>>>>>> Error >>>>>>')
      window.console.log(err)
      window.console.groupEnd()
    }
  }
}
