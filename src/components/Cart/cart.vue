<template>
  <div class="cart">
    <div class="cart-container">
      <div class="cart-text">
        <div class="cart-empty-text">
          选择加入购物车
        </div>
      </div>
      <div>
        <button
          class="cart-subtotal-btn"
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
import './cart.scss';

export default {
   name:'Cart',

};
</script>