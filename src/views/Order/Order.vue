<template>
  <div>
    <button
      class="order-btn"
      @click="click"
    >
      click
    </button>
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
      ...mapActions([ 'loadOrder' ]),

      click (){
         this.loadOrder();
      }
   },
};
</script>

<style>

</style>
