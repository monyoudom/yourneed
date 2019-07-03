import api from '../../api/APIClient'


export const NewFeed = {

    state: {
        newfeed: []
    },
    mutations: {
        APPEND_NEWFEED(state, newfeed) {
            state.newfeed.push(newfeed)
        },

        SET_NEWFEED(state, newfeed) {
            state.newfeed = newfeed
        }
    },
    actions: {
        async getNewfeed({ commit }) {
            const res = await api.newfeed()
            if (res.status === 200) {
                commit('SET_NEWFEED', { data: res.data.results })
            } else {
                //commit('ALERT_TOGGLE', res, { root: true })
                console.log(res.status)
            }
        }
    }

}