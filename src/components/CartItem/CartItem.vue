<template>
  <div class="cartItem">
    <!-- 菜名 -->
    <div class="cartItem-name">
      {{ name[`${lang}`] }}
    </div>
    <div class="cartItem-right">
      <!-- 价格 -->
      <div class="cartItem-price">
        {{ price | FormatPrice }}
      </div>
      <!-- 减少 -->
      <button
        v-if="showbtn"
        class="cartItem-removeBtn"
        @click="removeFood"
      >
        -
      </button>
      <!-- 数量 -->
      <div :class="[showbtn ? 'cartItem-count' : 'cart-item-count']">
        {{ count }}
      </div>
      <!-- 增加 -->
      <button
        v-if="showbtn"
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
export default {
   name: 'CartItem',
   props:{
      items:{
         type:Array,
         required:true
      },
      showbtn:{
         type:Boolean,
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
         return this.$props.items[0].name;
      },
      price (){
         return this.$props.items.length * this.$props.items[0].price;
      },
      count (){
         return this.$props.items.length;
      }

   },
   methods:{
      ...mapActions([
         'addCart',
         'removeCart'
      ]),
      addFood (){
         this.addCart({ food: this.$props.items[0] });
      },
      removeFood (){
         this.removeCart({ food: this.$props.items[0] });
      }
   }
};
</script>

<style>

</style>