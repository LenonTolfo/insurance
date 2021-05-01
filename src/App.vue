<template>
  <navbar />
  <router-view/>
</template>

<style>

</style>
<script>
import Navbar from '@/components/Navbar';
export default {
  components: {Navbar},
  mounted() {
    this.$store.dispatch('loadCurrentUser')
  },
};
</script>
