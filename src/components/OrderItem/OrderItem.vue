<template>
  <div
    ref="orderBox"
    :class="['order-item-box',show ? 'order-item-box-show' : '']"
  >
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
        v-for="items in orderItems"
        :key="items[0]._id"
        class="container-between cart-item"
      >
        <!-- 显示购物车中所点的菜及数量 -->
        <div class="cart-item-name">
          {{ items[0].name[`${lang}`] }}
        </div>
        <div
          v-if="show"
          class="cart-item-price"
        >
          $ {{ items[0].price/100 }}
        </div>
        <div class="cart-item-count">
          {{ items.length }}
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
        <div> {{ totalPrice | FormatPrice }}</div>
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
import { getTotal } from '@/common/utils';

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
            show:false,
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
      
      
      // 显示菜的价格
      price(){
       
      },

      // 显示订单中所点的菜及数量
      orderItems (){

        const orderItems = _(this.$props.item.cart)
          .groupBy(i => i._id)
          .value();
        console.log(orderItems);
        return orderItems;
      },

      // 显示总价
      totalPrice(){
        return getTotal(this.$props.item.cart);
        // let totalPrice = 0;
        // _.forEach(this.$props.item.cart,(item)=>{
        //     totalPrice += item.price / 100;
        // });
        // console.log('totalPrice===>',totalPrice);
        // return totalPrice.toFixed(2);
      },
      
    },

    methods: {
        // 点击更多按钮 改变order的样式
        ChangeMore (e){

            this.show = true;

            document.addEventListener('click', this.handleOut, true);

        },
        handleOut(e){
          const ref = this.$refs.orderBox;
          if (ref && !ref.contains(e.target)) {
            this.show = false;
            document.removeEventListener('click',this.handleOut,true)
          }
        },

       
    },
    
};
</script>

<style>

</style>