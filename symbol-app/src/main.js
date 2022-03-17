import App from './App.vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/index.js'
import axios from 'axios'
import Home from './views/Home.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// const axiosInstance = axios.create({
//     baseURL: "https://api2.binance.com/api/v3/"
//   });
  
//   Vue.prototype.$axios = axiosInstance;









new Vue({
    el: '#app',
    router,
    render: h => h(App)
})