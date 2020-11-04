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
      <div class="container-row-center order-time">
        {{ time }}
      </div>
    </div>

    <!-- order里的菜品 -->
    <div class="order-items">
      <CartItem
        v-for="items in orderItems"
        :key="items.key"
        :items="items"
        :showbtn="false"
      ></CartItem>
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
import CartItem from '../CartItem/CartItem';

/* eslint-disable */
export default {
    name: 'OrderItem',
    components:{
      CartItem
    },
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