<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <label for="userName" class="h3 m-2">Name:</label>
        <span id="userName" class="text-capitalize h5"> {{ currentUser.name }} </span>      </div>
      <div class="col-sm">
        <label for="userAge" class="h3 m-2">Age:</label>
        <span id="userAge" class="text-capitalize h5"> {{ currentUser.age }} </span>
      </div>
      <div class="col-sm">
        <label for="userMembership" class="h3 m-2">Membership:</label>
        <span id="userMembership" class="text-capitalize h5"> {{ currentUser.membership_type }} </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {mapState} from 'vuex'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  computed: {
    ...mapState(['currentUser'])
  },
});
</script>
