import api from '../../api/APIClient'


export const Post = {

    state: {
        post: []
    },
    mutations: {
        SET_POST(state, post) {
            state.post = post.data
        }
    },
    actions: {
        async postProblem({ commit},payload) {
          console.log(payload,"sds++")
            const res = await api.post(payload)
            if (res.status === 200) {
                commit('SET_POST', { data: true })
            } else {
                //commit('ALERT_TOGGLE', res, { root: true })
                commit('SET_POST', { data: false })
            }
        }
    },
    getters: {
        getPost: function(state) {
            return state.post;
        }

    }

}