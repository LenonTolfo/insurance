<template>
  <div>
    <div v-for="user in users" :key="user.name" class="my-2">
      {{ user.name }} <button class="btn btn-success" @click="loginUser(user)">Login</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AdminUsersList',
  computed: {
    ...mapState(['users'])
  },
  mounted() {
    this.$store.dispatch('loadUsers')
  },
  methods: {
    loginUser(user) {
      this.$store.dispatch('loginUser', user)
    }
  },
};
</script>

<style scoped>

</style>
