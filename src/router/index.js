import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/home/index-home.vue'
// import Detail from '@/components/detail/index-detail.vue'
// import NotFound from '@/components/not-found/index-not-found.vue'
// import Enter from '@/components/login/index-login.vue'
// import User from '@/components/user/index-user.vue'
// import Company from '@/components/company/index-company.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',
          component: resolve => require(['@/components/home/index-home.vue'], resolve)
        },
        {
          path: '/detail/:id',
          component: resolve => require(['@/components/detail/index-detail.vue'], resolve)
        },
        {
          path: '/login',
          component: resolve => require(['@/components/login/index-login.vue'], resolve)
        },
        {
          path: '/user',
          component: resolve => require(['@/components/user/index-user.vue'], resolve)
        },
        {
          path: '/company',
          component: resolve => require(['@/components/company/index-company.vue'], resolve)
        },
        {
          path: '/index',
          redirect: '/'
        },
        {
          path: '*',
          component: resolve => require(['@/components/not-found/index-not-found.vue'], resolve)
        }
      ]
    },
    {
      path: '/index',
      redirect: '/'
    }
  ]
})
