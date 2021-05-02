import { createStore } from 'vuex'

// importing the mockup data files
import customersData from '../assets/data/customers.json'
import products from '../assets/data/products.json'

export default createStore({
  state: {
    users: [], // users loaded from the mockup data file
    currentUser: {},
    userInsurances: {}
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
    SET_USER_INSURANCES(state, insurances){
      state.userInsurances = insurances
    },
  },
  actions: {
    loadUsers({commit}) {
      commit('SET_USERS', customersData.customers)
    },
    loadCurrentUser({commit,dispatch}) {
      // load logged user from local storage
      const user = JSON.parse(window.localStorage.currentUser)
      commit('SET_CURRENT_USER', user)
      dispatch('loadUserInsurances', user)
    },
    logoutUser({commit}) {
      commit('LOGOUT_USER')
      window.localStorage.currentUser = JSON.stringify({})
    },
    async loginUser({commit, dispatch}, loginInfo) {
      try {
        // todo make a mock API request to validate user
        const user = customersData.customers.find((customer) => {
          if (customer.name === loginInfo.name && customer.password === loginInfo.password) return true
        })

        if (!user) throw 'no user'

        commit('SET_CURRENT_USER', user)
        window.localStorage.currentUser = JSON.stringify(user)
        dispatch('loadUserInsurances', user)

        return user
      } catch {
        return {error: "Username/Password combination was incorrect. Please try again."}
      }
    },
    loadUserInsurances({commit}, user){
      // eslint-disable-next-line
      const insurances = user.selected_insurances.map((name: string ) => { // @ts-ignore
        const insurance = products[name]
        insurance.name = name
        return insurance
      })
      commit('SET_USER_INSURANCES', insurances)
    },
},
  modules: {
  }
})
