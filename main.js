import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import store from './store'

import echarts from 'echarts'
import 'font-awesome/css/font-awesome.css'


Vue.prototype.$echarts = echarts

Vue.prototype.$axios = axios

Vue.config.productionTip = false;

axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
