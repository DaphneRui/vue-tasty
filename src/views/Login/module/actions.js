import * as types from '../../../store/mutation-type';
import { login } from '../../../request/login';
import { setStorage } from '../../../common/utils';
const actions = {
   /* 接收从login页面传过来的数据，触发mutations的操作，因为actions里面不能直接修改state里的数据 */
   async login ({ commit },data){
      try{
         if(data){
         // console.log(data);
            const user = await login(data);
            setStorage('userInfo',data);
            commit(types.SAVE_USERINFO,user );
         }
      }catch(error){
         this._vm.$modal.show('error',{ message:error.message });
         console.log('login error',{ message:error.message });
      }
   }
};

export default actions;