import Vue from 'vue'
import Router from 'vue-router'
import Launch from '../src/views/Launch'
import Navigation from '../src/views/Navigation'
import Detail from '../src/views/Detail'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: Navigation
        },
        {
            path: '/',
            name: 'launch',
            component: Launch
        }
    ]
})

export default router