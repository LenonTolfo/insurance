<template>
  <div class="container mt-5">
    <form action="">
      <div class="form-group">
        <label for="inputName">User Name</label>
        <input v-model="loginInfo.name" type="text" class="form-control" id="inputName" aria-describedby="emailHelp">
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input v-model="loginInfo.password" type="password"  class="form-control" id="inputPassword">
      </div>
      <button type="submit" class="btn btn-primary" @click="loginUser">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
      return {
        loginInfo: {
          name: '',
          password: '',
        }
      }
  },
  methods: {
    loginUser() {
      this.$store.dispatch('loginUser', this.loginInfo)
    }
  }
};
</script>

<style scoped>

</style>
