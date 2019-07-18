import Vue from 'vue'
import Router from 'vue-router'
import Launch from '../src/views/Launch'
import Navigation from '../src/views/Navigation'
import Install from '../src/views/Install'

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
        },
        {
            path:'/install',
            name: 'install',
            component : Install
        }
    ]
})

export default router