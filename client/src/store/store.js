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
            state.isLoggedIn = true;
        },
        setToken(state, token) { // dole mora da postoji ovakvo ime u mutations
            state.token = token;
        },
        removeStoreData(state){
            state.username = null;
            state.isLoggedIn = false;
            state.token = null;
        }
    },
    actions: {
        setUsername({commit}, username) {
            commit('setUsername', username)
        },
        setToken({commit}, token) {
            commit('setToken', token)
        },
        removeStoreData({commit}){
            commit('removeStoreData')
        }
    }
})