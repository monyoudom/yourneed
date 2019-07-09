import api from '../../api/APIClient'
import { async } from 'q';


export const NewFeed = {

    state: {
        newfeed: [],
        next : []
    },
    mutations: {
        SET_NEWFEED(state, newfeed) {
            state.newfeed.push(newfeed.data)
        },

        SET_NEXT(state, next) {
            state.next = next.data
        }
    },
    actions: {
        async getNewfeed({ commit },playload) {
            console.log(playload,"playload")
            const res = await api.newfeed(playload)
            console.log(res.data.next)  
            if (res.status === 200) {
                commit('SET_NEWFEED', { data: res.data.results })
                commit('SET_NEXT', { data: res.data.next })
                return true
            } else {
                //commit('ALERT_TOGGLE', res, { root: true })
                console.log(res.status)
                return false
            }
        },

        
    },
    getters: {
        newfeed: function(state) {
            const output = []
            state.newfeed.forEach((data) => {
                data.forEach((value) => {
                    output.push({ title: value.title, content: value.content, img: value.img,firstName: value.consultants["first_name"],lastName: value.consultants["last_name"],profile:value.consultants["profile"],position: value.consultants["position"] })
                })
                
            })
            return output;
        },

        nextPage: function(state) {
           return state.next
        }

    }

}