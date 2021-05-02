<template>
  <div class="container">
    <div>
      <h3>User insurances:</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
      <div class="col mb-4" v-for="(insurance, index) in userInsurances" :key="index">
        <div class="card text-white bg-success">
          <div class="card-header text-capitalize">{{ insurance.name.replace(/_/g, ' ') }}</div>
          <div class="card-body">
            <p class="card-text text-capitalize">availability: {{ insurance.availability }}</p>
            <insurance-price :prices="insurance.prices"/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>Membership insurances:</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
      <div class="col mb-4" v-for="(insurance, index) in membershipInsurances" :key="index">
        <div class="card text-white bg-primary">
          <div class="card-header text-capitalize">{{ insurance.name.replace(/_/g, ' ') }}</div>
          <div class="card-body">
            <p class="card-text text-capitalize">availability: {{ insurance.availability }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import InsurancePrice from '@/components/InsurancePrice';

export default {
  name: 'UserCurrentInsurances',
  components: {InsurancePrice},
  computed: {
    ...mapState(['userInsurances']),
    ...mapState(['membershipInsurances']),
  },
};
</script>

