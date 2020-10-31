import * as types from '@/store/mutation-type';
import  { menu }  from '@/request/menu';
import { setStorage,getStorage } from '@/common/utils';
import _ from 'lodash';
const actions = {

   async getMenu ({ commit },{ restaurantId }){
      commit(types.SHOW_LOADING);
      try{
         const data = await menu({ restaurantId });
         commit(types.SET_MENU,data );

      }catch(error){
         // commit(types.SET_MENU,{ message: error.message } );
      }finally{
         commit(types.HIDE_LOADING);
      }

   },
   /* 添加菜品 */
   async addCart ({ commit },{ food }){
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

};

export default actions;