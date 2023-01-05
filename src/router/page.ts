import { RouteRecordRaw } from 'vue-router'
import home from '@/pages/home.vue'
import login from '@/pages/login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: home
  },
  {
    path: '/login/:redirect?',
    name: 'login',
    props: true,
    component: login
  },
  {
    path: '/404',
    name: 'NotFound',
    meta: {
      keepAlive: true
    },
    component: () => import('@/pages/error-pages/NotFound.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

export default routes
