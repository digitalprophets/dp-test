import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, // nikad ne menjaj vrednost osim ako je kroz akciju ili mutaciju
    state: { // globalne promenljive tj. "stanja"
        username: null,
        isLoggedIn: false,
        token: null
    },
    mutations: {
        setUsername(state, username) { // dole mora da postoji ovakvo ime u mutations
            state.username = username;
        },
        setToken(state, token) { // dole mora da postoji ovakvo ime u mutations
            state.token = token;
        }
    },
    actions: {
        setUsername({commit}, username) {
            commit('setUsername', username)
        },
        setToken({commit}, token) {
            commit('setToken', token)
        }
    }
})