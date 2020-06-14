import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'
import sea from './components/sea.vue'
import pageination from './components/pageination.vue'
import update from './components/update.vue'
import providerAdd from './components/providerAdd.vue'
import User from './components/User.vue'
import upload from './components/upload.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/sea',
      component: sea,
      children: [
        {
          path: '/',
          component: pageination
        },

        {
          path: '/pageination',
          component: pageination
        },
        {
          path: '/update',
          component: update
        },
        {
          path: '/providerAdd',
          component: providerAdd
        },
        {
          path: '/user',
          component: User
        },
        {
          path:'/upload',
          component: upload
        }
      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  if (to.pash === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr && to.path !== '/login') return next('/login')
  next()
})

export default router
