import { createStore } from 'vuex'

// importing the mockup data files
import customersData from '../assets/data/customers.json'

export default createStore({
  state: {
    users: [], // users loaded from the mockup data file
    currentUser: {},
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    LOGOUT_USER(state) {
      state.currentUser = {}
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user
    },
  },
  actions: {
    async loadUsers({commit}) {
      // this would be an API request, for now just the testing data
      commit('SET_USERS', customersData.customers)

      // load logged user from local storage
      const user = JSON.parse(window.localStorage.currentUser)
      commit('SET_CURRENT_USER', user)
    },
    logoutUser({commit}) {
      commit('LOGOUT_USER')
      window.localStorage.currentUser = JSON.stringify({})
    },
    loginUser({commit}, user) {
      commit('SET_CURRENT_USER', user)
      window.localStorage.currentUser = JSON.stringify(user)
    }
  },
  modules: {
  }
})
