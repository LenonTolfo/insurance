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
      commit('SET_USERS', customersData.customers)

      // load logged user from local storage
      const user = JSON.parse(window.localStorage.currentUser)
      commit('SET_CURRENT_USER', user)
    },
    logoutUser({commit}) {
      commit('LOGOUT_USER')
      window.localStorage.currentUser = JSON.stringify({})
    },
    async loginUser({commit}, loginInfo) {
      try {
        // todo make a mock API request to validate user
        const user = customersData.customers.find((customer) => {
          if (customer.name === loginInfo.name && customer.password === loginInfo.password) return true
        })

        if (!user) throw 'no user'

        commit('SET_CURRENT_USER', user)
        window.localStorage.currentUser = JSON.stringify(user)
        return user
      } catch {
        return {error: "Username/Password combination was incorrect. Please try again."}
      }
    },
  },
  modules: {
  }
})
