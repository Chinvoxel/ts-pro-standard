import { createRouter, createWebHashHistory } from 'vue-router'
import { getToken } from '@/utils/token'
import routes from './page'

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 })
})

router.beforeEach(to => {
  const isAuthenticated = !!getToken()
  if (to.name === 'login') {
    return isAuthenticated ? { path: '/' } : true
  }
  return isAuthenticated ? true : { path: '/login' }
})

// 路由错误捕获
router.onError(err => {
  console.log('err: ', err)
})

export default router
