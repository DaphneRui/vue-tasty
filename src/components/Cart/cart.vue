<template>
  <div class="cart">
    <button>
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
    </div>
  </div>
</template>

<script>
import './cart.scss';

export default {
   name:'Cart',

};
</script>