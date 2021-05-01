<template>
  <div class="container mt-5">
    <form v-on:submit.prevent>
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
    async loginUser() {
      let user = await this.$store.dispatch('loginUser', this.loginInfo)
      if (user.error) {
        alert(user.error)
      }
    }
  }
};
</script>

<style scoped>

</style>
