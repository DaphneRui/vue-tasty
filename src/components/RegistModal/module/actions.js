import * as types from '../../../store/mutation-type';
import { regist } from '../../../request/regist';
import { encode } from '../../../common/utils';

const actions = {
   async regist ({ commit },{ username,password }){
      try{
         const user = await regist({ username:encode(username),password:encode(password) });
         console.log('regist user',user);
         commit(types.REGIST_USERINFO,user);
      }catch(error){
         this._vm.$modal.show('error',{ message:error.message });
      }
   }
};

export default actions;