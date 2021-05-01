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
    <div class="col-4 d-flex">
      <span class="navbar-text ml-auto mr-2">
        {{ currentUser.name}}
      </span>
      <button class="btn btn-primary"> Logout</button>
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
};
</script>

<style scoped>

</style>
