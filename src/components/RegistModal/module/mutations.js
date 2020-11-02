import * as types from '../../../store/mutation-type';

const mutations = {
   [types.REGIST_USERINFO] (state,data){
      state.user = data;
   }
};

export default mutations;