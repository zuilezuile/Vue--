import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Fabiao from '@/components/Fabiao'
import Er from '@/components/er'
import San from '@/components/san'
import Si from '@/components/si'
import Wu from '@/components/wu'
import Liu from '@/components/liu'
import Xiaoxi from '@/components/xiaoxi'
import Wode from '@/components/wode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/er',
      name: 'Home',
      component: Home,
      children: [
        { path: '/er', name:'Er',component: Er },
        { path: '/san', name:'San',component: San },
        { path: '/si', name:'Si',component: Si },
        { path: '/wu', name:'Wu',component: Wu },
        { path: '/liu', name:'Liu',component: Liu }
      ]
    },
    {
      path: '/fabiao',
      name: 'Fabiao',
      component: Fabiao
    },
    {
      path: '/xiaoxi',
      name: 'Xiaoxi',
      component: Xiaoxi
    },
    {
      path: '/wode',
      name: 'Wode',
      component: Wode
    }
  ]
})
