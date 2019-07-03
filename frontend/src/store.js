import Vue from 'vue'
import Vuex from 'vuex'


import { NewFeed } from './stores/newfeed/newfeed.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        newfeed: NewFeed
    },
    state: {},
    mutations: {},
    actions: {}
})