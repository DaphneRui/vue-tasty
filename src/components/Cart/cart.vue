<template>
  <div class="cart">
    <div>
      <button
        v-if="isShow"
        class="menu-cart-closed"
      >
        <img
          class="menu-cart-closed-btn cursor"
          src="@/assets/close_btn.png"
          @click="expand"
        />
      </button>
    </div>
    <div
      v-show="isShow"
      class="cart-left-container"
    >
      <!-- 131133131 -->
      <div class="container-col">
        <div class="container-row-center">
          <img src="@/assets/logo.png" />
        </div>
        <div class="container-row-align">
          <div class="menu-cart-payment-input">
            <select
              value="payment"
              options="payments"
            >
              <option>weChat</option>
              <option>ApplePay</option>
              <option>支付宝</option>
            </select>
            <!-- <v-select
              :placeholder="'选择支付方式'"
              :options="payments"
              :options-value="'value'"
              :options-lable="'img'"
            >
            </v-select> -->
          </div>
        </div>
      </div>
      <div
        :class="[isShow?'cart-expend':'cart-container']"
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
          <div
            v-show="isShow"
            class="container-between menu-cart-total"
          >
            <div>总价：</div>
            <div>{{ totalPrice | Money }}</div>
          </div>
          <button
            v-if="isShow == false"
            class="cart-totalBtn"
            :disabled="cartItem.length === 0"
            :hover="cartItem.length > 0"
            @click="submit"
          >
            {{ totalPrice | Money }}
          </button>
          <button
            v-else
            class="cart-totalBtn-style"
            @click="submit"
          >
            确认下单
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import './cart.scss';
import _ from 'lodash';
// import { setStorage,getStorage } from '@/common/utils';

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
         isShow:false,
         payment: '',
         payments: [
            { value: 'alipay', img: '@/assets/alipay.png' },
            { value: 'wechat', img: '@/assets/wechatpay.png' },
            { value: 'applepay', img: '@/assets/applepay.png' }
         ],

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
   methods: {
      ...mapActions([
         'orderFood'
      ]),
      submit (){
         if(!this.isShow){
            this.isShow = true;
         }else{
            this.orderFood();
         }
      },
      expand (){
         this.isShow = false;
      }
   },
   //  methods: {
   //     ...mapActions([
   //        'orderFood'
   //     ]),
   //     confirmOrder (){
   //        this.orderFood();
   //     }
   //  }
};
</script>