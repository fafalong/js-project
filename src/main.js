// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import router from './router'
import '@/assets/css/common.css'
import '@/assets/js/rem.js'
import '@/assets/js/common.js'
import  '../node_modules/mint-ui/lib/style.css'
import  '../node_modules/mint-ui/lib/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
