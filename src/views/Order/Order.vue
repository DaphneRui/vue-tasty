<template>
  <div>
    <!-- <button
      class="order-btn"
      @click="click"
    >
      click
    </button> -->
    <div class="order-container">
      <div class="order-tab">
        <div class="order-tab-fixed">
          {{ $t('order.title') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import { loadOrder } from '@/request/order';
import './order.scss';

export default {
   name:'Order',
   data () {
      return {

      };
   },
   methods: {
      ...mapActions([ 'loadOrderActions' ]),

      // click (){
      //    this.loadOrder();
      // }
   },
};
</script>

<style>

</style>
