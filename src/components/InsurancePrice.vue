<template>
  <p class="card-text text-capitalize">Price: {{ price }}</p>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'InsurancePrice',
  props: ['prices'],
  computed: {
    ...mapState(['currentUser']),
    price() {
      let obj = this.prices.find((item) => {
        return item.maxAge >= this.currentUser.age && item.minAge <= this.currentUser.age
      })
      return obj.price +' '+  obj.currency
    }
  }
};
</script>
