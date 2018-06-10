// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import  Velocity from 'velocity-animate'
import scroll from './assets/instruct/scroll.js'
import './assets/animate.css'
import './assets/base.css'
Vue.config.productionTip = false
Vue.use(Element, { size: 'small' })
Vue.use(VueResource)
Vue.directive('scroll', scroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
