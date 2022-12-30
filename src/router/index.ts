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
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
  return true
})

// 路由错误捕获
router.onError(err => {
  console.log('err: ', err)
})

export default router
