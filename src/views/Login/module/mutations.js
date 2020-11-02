import * as types from '../../../store/mutation-type';
/* 接收actions里面传过来的data，通过mutations改变state里面的值 */
const mutations = {
   [types.SAVE_USERINFO] (state,data){
      state.user = data;
      // console.log('state',state);
   },

   [types.CLEAR_USERINFO] (state){
      state.user = {};
   }
};

export default mutations;