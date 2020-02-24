import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/** 初始路由*/
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import("views/login/login.vue")
    }
  ]
})
/**
 * 准备动态添加的路由
 */
export const DynamicRoutes = [
  {
    path: '',
    component:  () => import('views/layout/index.vue'),
    name: 'container',
    redirect: '/home',
    meta: {},
    children: [
      {
        path: '/screen',
        name: 'allscreen',
        redirect: {
          name: 'screen'
        },
        meta: {
          icon: 'icon-tubiaotongji',
          requiresAuth: true,
          name: "综合大屏"
        }
      },
      {
        id: 1,
        path: 'home',
        component: () => import('views/home/index.vue'),
        name: 'home',
        meta: {
          name: '综合首页',
          icon: 'icon-shouye',
          menuKey: 'home'
        }
      },
    ]
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
    }
  },
  {
    path: '/403',
    component: () => import('views/errorPage/403.vue')
  },
  {
    path: '*',
    component:  () => import('views/errorPage/404.vue')
  }
]


export default router

