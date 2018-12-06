import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let auth = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true
})

let api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    logs: []

  },
  mutations: {
    SETUSER(state, user) {
      state.user = user
    },

    setLogs(state, logs) {
      state.logs = logs
    },

    setNewLog(state, log) {
      state.logs.push(log)
    }


  },
  actions: {
    login({ commit }, creds) {
      auth.post('login', creds)
        .then(res => {
          console.log(res.data)
          commit('SETUSER', res.data)
          router.push('/home')
        })
        .catch(err => alert(err))
    },
    register({ commit }, creds) {
      auth.post('register', creds)
        .then(res => {
          commit('SETUSER', res.data)
          router.push({ name: 'home' })
        })
        .catch(err => alert(err))
    },
    authenticate({ commit }) {
      auth.get('authenticate')
        .then(res => commit('SETUSER', res.data))
        .catch(err => {
          router.push({ name: 'auth' })
        })
    },
    logout({ commit }) {
      auth.delete('logout')
        .then(res => {
          commit('SETUSER', {})
          router.push({ name: 'auth' })
        })
    },
    getLogs({ commit }) {
      api.get('logs')
        .then(res => {
          console.log(res)
          commit('setLogs', res.data)
          router.push({ name: 'home' })
        })

    },
    addLog({ commit }) {
      api.post('logs')
        .then(res => {
          commit('setNewLog', res.data)
          router.push({ name: 'home' })
        })
    }
  }
})
