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
        v-for="item in list"
        :key="item._id"
      >
        {{ $t('order.more') }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex';
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
         'list': state => state.order.orderList
         
      })
   },
   created(){
      this.loadOrderActions();
   }
};
</script>

<style>

</style>
