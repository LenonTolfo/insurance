<template>
  <div class="container mt-5">
    <h1>Login</h1>
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="inputName">User Name</label>
        <input v-model="loginInfo.name" type="text" class="form-control" id="inputName" aria-describedby="emailHelp"
               required>
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <div class="input-group mb-3">
          <input v-model="loginInfo.password" class="form-control" id="inputPassword"
                 :type="showPassword ? 'text' : 'password' " required>
          <span class="input-group-text" @click="showPassword = !showPassword">
            <i :class="showPassword ? 'bi bi-eye-fill' : 'bi bi-eye-slash-fill' "></i>
          </span>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click="loginUser" :disabled="!validFields">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
      return {
        showPassword: false,
        loginInfo: {
          name: '',
          password: '',
        }
      }
  },
  computed: {
    validFields() {
      return this.loginInfo.name && this.loginInfo.password
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
