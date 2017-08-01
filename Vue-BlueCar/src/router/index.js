import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Xinche from '@/components/Xinche'
import Chuxing from '@/components/Chuxing'
import Zixun from '@/components/Zixun'
import Shouyeone from '@/components/Shouyeone'
import Denglu from '@/components/Denglu'
import Zhuce from '@/components/Zhuce'
import Xialashuaxin from '@/components/Xialashuaxin'
import Xinche_xiangqing from '@/components/Xinche_xiangqing'
import Footer from '@/components/Footer'
import Chuxing_xiangqing from '@/components/Chuxing_xiangqing'
import Qiche from '@/components/Qiche'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: function(hello){
        
      }
    },
    {
      path: '/xinche',
      name: 'Xinche',
      component: Xinche,

    },

    {
      path: '/chuxing',
      name: 'Chuxing',
      component: Chuxing
    },
    {
      path: '/zixun',
      name: 'Zixun',
      component: Zixun
    },
    {
      path: '/shouyeone/:id',
      name: 'Shouyeone',
      component: Shouyeone
    },
    {
      path: '/denglu',
      name: 'Denglu',
      component: Denglu
    },
    {
      path: '/zhuce',
      name: 'Zhuce',
      component: Zhuce
    },
    {
      path: '/xinche_xiangqing/:id',
      name: 'Xinche_xiangqing',
      component: Xinche_xiangqing
    },
        {
      path: '/chuxing_xiangqing/:id',
      name: 'Chuxing_xiangqing',
      component: Chuxing_xiangqing
    },
        {
      path: '/qiche',
      name: 'Qiche',
      component: Qiche
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
  ]
})
