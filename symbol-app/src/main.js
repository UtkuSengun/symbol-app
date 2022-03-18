import App from './App.vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/index.js.js'
import axios from 'axios'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const axiosIns = axios.create({
    baseURL: 'https:api2.binance.com/api/v3/'
});

Vue.prototype.$http = axiosIns;


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})