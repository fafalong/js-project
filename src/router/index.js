import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Find from '@/page/find'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
  
  ]
})
