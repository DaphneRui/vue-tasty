import * as types from '@/store/mutation-type';

const mutations = {
   [types.LOAD_ORDER] (state,data){

      state.orderList = data;

   }
};

export default mutations;