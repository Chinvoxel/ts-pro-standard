import { createRouter, createWebHashHistory } from 'vue-router'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/token'
import routes from './page'

const whiteList = ['/NotFound', '/login']

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 })
})

router.beforeEach(to => {
  NProgress.start()
  const hasToken = !!getToken()

  if (hasToken) {
    if (to.name === 'login') {
      return { path: '/' }
    }
    return true
  }

  if (to.name !== 'login') {
    if (whiteList.includes(to.path)) {
      return true
    }

    ElMessage.warning('当前登陆已过期，请重新登录!')
    return { name: 'login', params: { redirect: to.path } }
  }

  return true
})

router.afterEach(() => {
  NProgress.done()
})

// 路由错误捕获
router.onError(err => {
  console.log('err: ', err)
})

export default router
