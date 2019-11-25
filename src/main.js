import Vue from 'vue'
// BT 套件
import 'bootstrap'
// 官方套件
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
