import api from '../../api/APIClient'
import { async } from 'q';


export const NewFeed = {

    state: {
        newfeed: [],
        next : []
    },
    mutations: {
        SET_NEWFEED(state, newfeed) {
            state.newfeed = newfeed.data
        },

        SET_NEXT(state, next) {
            state.next = next.data
        }
    },
    actions: {
        async getNewfeed({ commit },playload) {
            console.log(playload,"playload")
            const res = await api.newfeed(playload)
            console.log(res.data.results,"data new feed")  
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
                output.push({ title: data.title, content: data.content, img: data.img,firstName: data.consultants["first_name"],lastName: data.consultants["last_name"],profile:data.consultants["profile"],position: data.consultants["position"] })  
            })
            return output;
        },

        nextPage: function(state) {
           return state.next
        }

    }

}