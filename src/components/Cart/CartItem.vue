<template>
  <div class="containerBetween vertical cart-item">
    <div class="cart-item-name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
   name: 'CartItem',
   props:{
      item:{
         type:Array,
         required:true
      }
   },
   data () {
      return {

      };
   },
   computed:{
      ...mapState({
         lang:state=>state.language.lang
      }),

      name (){
         return this.$props.items[0].name[`${this.lang}`];
      },
   }
};
</script>

<style>

</style>