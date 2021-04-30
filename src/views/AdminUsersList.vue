<template>
  <div>
    <div v-for="user in users" :key="user.name">
      <div>{{ user.name }}</div>
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
    this.$store.dispatch("loadUsers")
  }
};
</script>

<style scoped>

</style>
