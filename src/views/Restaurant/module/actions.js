import * as types from '@/store/mutation-type';
import { restaurant } from '@/request/restaurant';
import router from '@/router';
import { setStorage } from '@/common/utils';

const actions =  {
   async setRestList ({ commit }){
      commit(types.SHOW_LOADING);
      try {
         const { list } = await restaurant();
         commit(types.SET_REST_LIST,{ list });
      } catch (error) {
         this._vm.$modal.show('error',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   },
   /* 跳转到菜单页 */
   async toMenu ({ commit },{ restaurant }){

      commit(types.SHOW_LOADING);
      try{
         commit(types.SAVE_REST_LIST,{ restaurant });
         setStorage('restaurant',restaurant);
         router.push(`/menu/${restaurant._id}`);
      }catch (error) {
         this._vm.$modal.show('error',{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   }
};

export default actions;