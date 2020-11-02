import * as types from '../../../store/mutation-type';
import { login } from '../../../request/login';
import { setStorage } from '../../../common/utils';
/* 引入加密函数 */
import { encode } from '../../../common/utils';
import router from '../../../router';
const actions = {
   /* 接收从login页面传过来的数据，触发mutations的操作，因为actions里面不能直接修改state里的数据 */
   async login ({ commit },{ username,password }){
      try{
         commit(types.SHOW_LOADING);
         const user = await login({ username:encode(username),password:encode(password) });
         commit(types.SAVE_USERINFO,user );
         setStorage('userInfo',user);
         if(history.length > 1){
            router.back();
         }else{
            router.push('/restaurant');
         }
      }catch(error){
         if(error.code === 'No user'){
            this._vm.$modal.show('error',{ message:error.message });
         }
         this._vm.$modal.show('error',{ message:error.message });
         // console.log('login error',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   },
   clearData ({ commit }){
      setStorage('userInfo',null);
      commit (types.CLEAR_USERINFO);
   }
};

export default actions;