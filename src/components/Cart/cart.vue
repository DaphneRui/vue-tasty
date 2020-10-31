<template>
  <div class="cart">
    <div
      class="cart-container"
    >
      <div
        class="cart-content"
      >
        <!-- 购物车空 -->
        <div
          v-if="cartItem.length === 0"
          class="cart-empty-text"
        >
          {{ $t('menu.cartTitle') }}
        </div>

        <!-- 购物车数据 -->
        <div v-if="cartItem.length > 0">
          <CartItem
            v-for=" item in cartItem"
            :key="item._id"
            :item="item"
          />
        </div>
      </div>
      <div>
        <button
          class="cart-totalBtn"
          :disabled="cartItem.length === 0"
          :hover="cartItem.length > 0"
        >
          {{ totalPrice | Money }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import './cart.scss';
import _ from 'lodash';
/* components */
import CartItem from '@/components/CartItem/CartItem';

export default {
   name:'Cart',
   components:{
      CartItem
   },
   /* 菜品价格 */
   filters:{
      Money: function (value){
         value = (value / 100).toFixed(2);
         return '$' + value;
      }
   },
   data () {
      return {

      };
   },
   computed: {
      ...mapState({
         'lang':state=>state.language.lang,
         'cart':state=>state.cart.cart
      }),
      cartItem (){
         /* 购物车为空 */
         if(_.isEmpty(this.cart)){
            return [];
         }
         /* 获取购物车数据 */
         const groupCart = _.groupBy(this.cart, (item) => item._id);
         return _.toArray(groupCart);
      },
      /* 总价 */
      totalPrice (){
         let price = 0;
         if (!_.isEmpty(this.cart)) {
            _.forEach(this.cart, (item) => {
               price += item.price;
            });
         }
         return price;
      }
   },
   created () {
      // console.log('cart',this.cart);
   },
};
</script>