import Vue from 'vue'
import Router from 'vue-router'

import find from './page/Tabbar/find.vue'
import Account from './page/Tabbar/Account.vue'
import Friend from './page/Tabbar/Friend.vue'
import My from './page/Tabbar/My.vue'
import vide from './page/Tabbar/vide.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/find'
    },
    {
      path: '/find',
      name: '发现',
      component: find
    },
    {
      path: '/vide',
      name: '视频',
      component: vide
    },
    {
      path: '/My',
      name: '我的',
      component: My
    },
    {
      path: '/Friend',
      name: '朋友',
      component: Friend
    },
    {
      path: '/Account',
      name: '账号',
      component: Account
    }
  ]
})
