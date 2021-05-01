<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="col-8">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">about</router-link>
          </li>
        </ul>
    </div>
    <div class="col-4 d-flex" v-if="currentUser.name">
      <span class="navbar-text ml-auto mr-2">
        {{ currentUser.name}}
      </span>
      <button class="btn btn-primary" @click="logoutUser"> Logout </button>
    </div>
    <div class="col-4 d-flex" v-else>
      <button class="btn btn-primary ml-auto"> Login </button>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
    }
  }
};
</script>

<style scoped>

</style>
