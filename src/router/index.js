import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/page/index'
import Find from '@/page/find'
import CustomHot from '@/components/custom-hot'
import Search from '@/components/custom-hot'
import Message from '@/page/message'
import Publish from '@/page/publish'
import AboutMy from '@/page/my'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/find',
      name:'Find',
      component:Find,
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/publish',
      name:'Publish',
      component:Publish
    },
    {
      path:'/message',
      name:'Message',
      component:Message
    },
    {
      path:'/my',
      name:'AboutMy',
      component:AboutMy
    }
  ]
})
