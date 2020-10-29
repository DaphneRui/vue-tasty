import * as types from '../../../store/mutation-type';

const mutaitions = {
   [types.REGIST_USERINFO] (state,data){
      state.user = data;
   }
};

export default mutaitions;