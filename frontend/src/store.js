import Vue from 'vue'
import Vuex from 'vuex'


import { NewFeed } from './stores/newfeed/newfeed.js'
import { Post } from './stores/post/post.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        newfeed: NewFeed,
        post: Post
    },
    state: {},
    mutations: {},
    actions: {}
})