import * as types from '@/store/mutation-type';
import  { menu }  from '@/request/menu';
import { placeOrder } from '@/request/order';
import { setStorage,getStorage } from '@/common/utils';
import _ from 'lodash';
import { i18n } from '@/main';
import router from '@/router/index';
const actions = {

   async getMenu ({ commit },{ restaurantId }){
      commit(types.SHOW_LOADING);
      try{
         const data = await menu({ restaurantId });
         commit(types.SET_MENU,data );

      }catch(error){
         this._vm.$modal.show('error',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }

   },
   /* 添加菜品 */
   async addCart ({ commit },{ food,cartId }){
      commit(types.SHOW_LOADING);
      let cart = [];
      try{
         /* 获取购物车数据 */
         if (_.isEmpty(getStorage('cart'))) {
            cart = [];
         } else {
            cart = getStorage('cart');
         }
         /* 添加数据 */
         cart.push(food);
         commit(types.SAVE_CART, { cart });
         setStorage('cart',cart);
         /* 区分购物车 */
         setStorage('cartId', cartId);
      }catch(error){
         this._vm.$modal.show('error',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }

   },
   /* 删除菜品 */
   async removeCart ({ commit },{ food }){
      commit(types.SHOW_LOADING);
      let cart = [];
      try{
         /* 获取购物车数据 */
         if (_.isEmpty(getStorage('cart'))) {
            cart = [];
         } else {
            cart = getStorage('cart');
         }
         /* 删除 */
         const index = _.findLastIndex(cart, (item) =>
            item._id  === food._id);
         cart.splice(index, 1);
         commit(types.SAVE_CART, { cart });
         setStorage('cart',cart);
      }catch(error){
         this._vm.$modal.show('error',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }

   },

   /* 确认下单 */
   async orderFood ({ commit }){
      commit(types.SHOW_LOADING);
      const user = getStorage('userInfo');
      /* 没有登录,跳转登录页面 */
      if(!user){
         this._vm.$modal.show('error',{ message: i18n.t('error.need-login'),func:()=>{
            router.push('/login');
         } });
         commit(types.HIDE_LOADING);
         return;
      }
      try{
         /* 确认下单,传送数据至订单页面 */
         const data = {
            payment: getStorage('payment').value, // 存在localstorage中的payment的value
            cart:	getStorage('cart'),	// 全部菜品平铺
            userId: getStorage('userInfo')._id,	// 用户id
            restaurantId: getStorage('restaurant')._id // 餐馆id
         };
         await placeOrder(data);
         /* 清空购物车 */
         commit(types.CLEAR_CART);
         setStorage('cart',[]);
         /* 跳转至订单页面 */
         router.push('/order');

      }catch(error){
         /* 用户登录态过期需要重新登录 */
         if(error.code === 'auth-failed'){
            this._vm.$modal.show('error',{ message: error.message,func:()=>{
               setStorage('userInfo','');
               router.push('/login');
            } });
         }else{
            this._vm.$modal.show('error',{ message:error.message });
         }
      }finally{
         commit(types.HIDE_LOADING);
      }

   }

};

export default actions;