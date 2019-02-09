import Vue from 'vue'
import Router from 'vue-router'

import find from './page/find/find.vue'
import vide from './page/vide/vide.vue'
import My from './page/My/My.vue'
import Friend from './page/Friend/Friend.vue'
import Account from './page/Account/Account.vue'
import Anchor from './components/Discovery/Anchor/Anchor'
import Personality from './components/Discovery/Personality/Personality'
import Remend from './components/Videoarea/Remend/Remend'
import Popula from './components/Videoarea/Popula/Popula'
import dynam from './components/Frienge/dynam/dynam'
import nearby from './components/Frienge/nearby/nearby'
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
      component: find,
      children: [{
        path: '/find/Anchor',
        name: '主播电台',
        component: Anchor
      }, {
        path: '/find/Personality',
        name: '个性推荐',
        component: Personality
      }],
      redirect: 'find/Anchor'
    },
    {
      path: '/vide',
      name: '视频',
      component: vide,
      children: [{
        path: '/vide/Remend',
        name: '推荐',
        component: Remend
      }, {
        path: '/vide/Popula',
        name: '热门',
        component: Popula
      }],
      redirect: 'vide/Remend'
    },
    {
      path: '/My',
      name: '我的',
      component: My
    },
    {
      path: '/Friend',
      name: '朋友',
      component: Friend,
      children: [
        {
          path: '/Friend/dynam',
          name: '动态',
          component: dynam
        },
        {
          path: '/Friend/nearby',
          name: '附近',
          component: nearby
        }
      ],
      redirect: 'Friend/dynam'
    },
    {
      path: '/Account',
      name: '账号',
      component: Account
    }
  ]
})
