import * as types from '../../../store/mutation-type';

const mutations = {
   [types.REGIST_USERINFO] (state,data){
      state.user = data;
      console.log('regist state',state);
   }
};

export default mutations;