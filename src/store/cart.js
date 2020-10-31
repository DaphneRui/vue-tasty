import * as types from './mutation-type';
import { getStorage } from '@/common/utils';

const cart = {

   state:{
      cart: getStorage('cart') || []
   },
   mutations:{
      [types.SAVE_CART] (state,data){
         state.cart = data.cart;
      },
      [types.CLEAR_CART] (state){
         state.cart = [];
      }
   }
};

export default cart;