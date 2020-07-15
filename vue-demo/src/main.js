import Vue from 'vue'
import App from './App.vue'

import 'styles/reset.css'
import router from './router'
import './plugins/element.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
