<template>
  <div :class="['order-item-box',changeStyle ? 'order-item-box-show' : '']">
    <!-- 订单里的restaurant名字，订单生成时间 -->
    <div class="order-title">
      <div class="title-text order-item-name">
        {{ name }}
      </div>
      <div class="container-row-center sub-title-text">
        {{ time }}
      </div>
    </div>

    <!-- order里的菜品 -->
    <div class="order-items">
      <div
        v-for="items in item.cart"
        :key="items.key"
        class="container-between cart-item"
      >
        <!-- 显示购物车中所点的菜及数量 -->
        <div class="cart-item-name">
          {{ items.name[`${lang}`] }}
        </div>
        <div class="cart-item-price">
          $ {{ items.price/100 }}
        </div>
        <div class="cart-item-count">
          {{ items.count }}
        </div>
      </div>
    </div>

    <!-- 展开后的bottom -->
    <div class="order-footer">
      <div
        v-show="show"
        class="container-row-center"
      >
        <img
          src="@/assets/logo.png"
          alt=""
        >
      </div>

      <div class="container-between order-total">
        <div> {{ $t('menu.total') }} </div>
        <div> ${{ price/100 }}</div>
      </div>

      <div class="container-row-center more-btn">
        <button
          class="normal-btn"
          @click="ChangeMore"
        >
          {{ $t('order.more') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import Moment from 'moment';
import './orderItem.scss';

/* eslint-disable */
export default {
   name: 'OrderItem',
   props:{
      item:{
         type:Object,
         require: true
      }
   },
   data () {
      return {
         changeStyle: false,
         show:false
      };
   },
   computed: {
      ...mapState({
         'lang': state => state.language.lang,
         'list': state => state.order.orderList
      }),

      // 显示restaurant----name
      name (){
         return this.$props.item.restaurant.name[`${this.lang}`];
      },
      // 显示下单时间
      time(){
         return Moment(this.$props.item.createdAt).format('YYYY-MM-DD hh:mm');
      },
      // 显示购物车中所点的菜及数量
      
      // 显示菜的价格
      price(){
         return this.$props.item.cart[0].totalPrice;
      },

      // 显示食物的数量
      // count(){
      //    return this.$props.item.length;
      // }


   },
   methods: {
      // 点击更多按钮 改变order的样式
      ChangeMore (e){
         this.changeStyle = !this.changeStyle
         this.show = !this.show

      },
   },
};
</script>

<style>

</style>