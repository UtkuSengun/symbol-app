import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: Home }
    ],
    mode: 'history',
    router
})

export default router