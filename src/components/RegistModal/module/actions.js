import * as types from '../../../store/mutation-type';
import { regist } from '../../../request/regist';

const actions = {
   async regist ({ commit },data){
      try{
         const user = await regist(data);
         commit(types.REGIST_USERINFO,user);
      }catch(error){
         console.log(error);
      }
   }
};

export default actions;