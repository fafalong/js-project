import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/page/index'
import Find from '@/page/find'
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
      component:Find
    }
  ]
})
