import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// BT 套件
import 'bootstrap'
// 官方套件
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
