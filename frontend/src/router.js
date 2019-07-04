import Vue from 'vue'
import Router from 'vue-router'
import Launch from '../src/views/Launch'
import Home from '../src/views/Home'
import Detail from '../src/views/Detail'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/',
            name: 'launch',
            component: Launch
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        }
    ]
})

export default router