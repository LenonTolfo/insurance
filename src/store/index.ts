import { createStore } from 'vuex'

// importing the mockup data files
import customersData from '../assets/data/customers.json'

export default createStore({
  state: {
    users: [], // users loaded from the mockup data file
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    }
  },
  actions: {
    async loadUsers({commit}) {
      // this would be an API request, for now just the testing data
      commit('SET_USERS', customersData.customers)
    },
  },
  modules: {
  }
})
