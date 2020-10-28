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
    <div class="order-list">
      <div
        v-for="item in order"
        :key="item._id"
      >
        {{ $t('order.more') }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex';
// import { loadOrder } from '@/request/order';
import './order.scss';
/* eslint-disable */
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
   computed:{
      ...mapState({
         orders: state=>state.order.orders
      })
   }
};
</script>

<style>

</style>
