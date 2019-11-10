import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '../lib/util'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes
})

// 全局拦截守卫
router.beforeEach(async (to, from, next) => {
  let isLogin = await store.dispatch('validate')
  console.log(to.matched)
  let needLogin = to.matched.some(item => item.meta.needLogin)
  if (needLogin) {
    if (to.name !== 'login') {
      if (isLogin) next()
      else next({ name: 'login' })
    } else {
      if (isLogin) next('/')
      else next()
    }
  } else {
    if (to.name !== 'login') {
      next()
    } else {
      if (isLogin) next('/')
      else next()
    }
  }
  console.log('3,全局的前置守卫 beforeEach')
  to.meta && setTitle(to.meta.title)
})

// 解析守卫
router.beforeResolve((to, from, next) => {
  // loading = false
  console.log('8,全局解析守卫 beforeResolve')
  next()
})

// 10.全局后置守卫
router.afterEach((to, from) => {
  // loading = false
  console.log('10.全局后置守卫')
})
/*
  1,导航被触发 about -> home;
  2,在失活的组件调用 beforeRouteLeave;
  3,全局的前置守卫 beforeEach
  4,重用的组件调用 beforeRouteUpdate (或 beforeRouteEnter)
  5,路由独享的守卫 beforeEnter
  6,解析异步路由组件
  7,在被激活的组件调用 beforeRouteEnter
  8,全局解析守卫 beforeResolve
  9,导航被确认
  10,全局的后置守卫 afterEach
  11,触发 DOM 更新
  12,用创建好的实例调用 beforeRouteEnter 内的 next 回调函数
 */

export default router
