<template>
  <div class="cartItem">
    <!-- 菜名 -->
    <div class="cartItem-name">
      {{ name[`${lang}`] }}
    </div>
    <div class="cartItem-right">
      <!-- 价格 -->
      <div class="cartItem-price">
        {{ price | Money }}
      </div>
      <!-- 减少 -->
      <button
        class="cartItem-removeBtn"
        @click="removeFood"
      >
        -
      </button>
      <!-- 数量 -->
      <div class="cartItem-count">
        {{ count }}
      </div>
      <!-- 增加 -->
      <button
        class="cartItem-addBtn"
        @click="addFood"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import './cartItem.scss';
// import _ from 'lodash';
export default {
   name: 'CartItem',
   /* 菜品价格 */
   filters:{
      Money: function (value){
         value = (value / 100).toFixed(2);
         return '$' + value;
      }
   },
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
         'lang':state=>state.language.lang
      }),
      name (){
         return this.$props.item[0].name;
      },
      price (){
         return this.$props.item.length * this.$props.item[0].price;
      },
      count (){
         return this.$props.item.length;
      }

   },
   created () {
      // console.log(this.$props.item);
   },
   methods:{
      ...mapActions([
         'addCart',
         'removeCart'
      ]),
      addFood (){
         this.addCart({ food: this.$props.item[0] });
      },
      removeFood (){
         this.removeCart({ food: this.$props.item[0] });
      }
   }
};
</script>

<style>

</style>