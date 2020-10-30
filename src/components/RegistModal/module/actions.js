import * as types from '../../../store/mutation-type';
import { regist } from '../../../request/regist';

const actions = {
   async regist ({ commit },data){
      try{
         console.log(data);
         const user = await regist(data);
         console.log('regist user',user);
         commit(types.REGIST_USERINFO,user);
      }catch(error){
         // console.log('regist error///',error);
         this._vm.$modal.show('error',{ message:error.message });
      }
   }
};

export default actions;