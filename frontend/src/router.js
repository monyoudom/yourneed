import Vue from 'vue'
import Router from 'vue-router'
import Launch from '../src/views/Launch'
import Home from '../src/views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'launch',
            component: Launch
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
})
