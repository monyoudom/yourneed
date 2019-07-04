import api from '../../api/APIClient'
import router from '../../router'


export const NewFeed = {

    state: {
        newfeed: []
    },
    mutations: {
        APPEND_NEWFEED(state, newfeed) {
            state.newfeed.push(newfeed)
        },

        SET_NEWFEED(state, newfeed) {
            state.newfeed = newfeed.data
        }
    },
    actions: {
        async getNewfeed({ commit }) {
            const res = await api.newfeed()
            res.data.results.forEach((data, index) => { data.index = index + 1 })
            if (res.status === 200) {
                commit('SET_NEWFEED', { data: res.data.results })
            } else {
                //commit('ALERT_TOGGLE', res, { root: true })
                console.log(res.status)
            }
            console.log("api call+++",res.data.results)
            
        }
    },

    getters: {
        newfeed: function(state) {
            const output = []
            state.newfeed.forEach((data) => {
                output.push({ index: data.index, title: data.title, content: data.content, img: data.img })
            })
            return output;
        }

    }

}