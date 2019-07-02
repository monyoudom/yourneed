import Vue from 'vue'
import Router from 'vue-router'
import Launch from '../src/views/Launch'
import Home from '../src/views/Home'
import Detail from '../src/views/Detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'launch',
            component: Launch
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        }
    ]
})