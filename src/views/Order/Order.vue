<template>
  <div class="order-main">
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
        <OrderItem :item="item"></OrderItem>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItem from '../../components/OrderItem/OrderItem';
import { mapActions,mapState } from 'vuex';
import './order.scss';
/* eslint-disable */
export default {
   name:'Order',
   components:{
     OrderItem
   },
   data () {
      return {

      };
   },
   methods: {
      ...mapActions([ 'loadOrderActions' ]),
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
