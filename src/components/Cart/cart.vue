<template>
  <div class="cart">
    <div
      class="cart-container"
      :class="{'cart-main-container': isShow}"
    >
      <div class="cart-text">
        <div
          class="cart-empty-text"
        >
          {{ $t('menu.cartTitle') }}
        </div>

        <!-- 购物车items -->
        <div>
          <!-- <CartItem
            v-for=" item in cartItems"
            :key="item._id"
            :items="item"
          /> -->
        </div>
      </div>
      <div>
        <button
          class="cart-subtotal-btn"
          :class="{ 'menu-cart-subtotal-btn-expand':isShow }"
          disabled=""
        >
          $0.00
        </button>
      </div>
    </div>
    <!-- <button>
      <img
        src="@/assets/close_btn.png"
        alt=""
      >
    </button>
    <div class="cart-container">
      <div class="cart-left">
        <div class="left-container">
          <div class="left-center">
            <img
              src="@/assets/logo.png"
              alt=""
            >
          </div>
          <div class="left-align">
            <div class="payment-input">
            </div>
          </div>
        </div>
      </div>
      <div class="cart-right"></div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import './cart.scss';
/* components */
// import CartItem from './CartItem';

export default {
   name:'Cart',
   components:{
      // CartItem
   },
   data () {
      return {
         isShow:false
      };
   },
   computed: {
      ...mapState({
         lang:state=>state.language.lang,
         cart:state=>state.cart.cart
      })
   },
};
</script>