import * as types from '@/store/mutation-type';
import { restaurant } from '@/request/restaurant';
import router from '@/router';

const actions =  {
   async setRestList ({ commit }){
      commit(types.SHOW_LOADING);
      try {
         const { list } = await restaurant();
         commit(types.SET_REST_LIST,{ list });
         console.log(list);
      } catch (error) {
         // commit(types.SET_REST_LIST,{ message: error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   },
   /* 跳转到菜单页 */
   async toMenu ({ commit },{ restaurantId }){

      commit(types.SHOW_LOADING);

      router.push({ name: 'Menu', params: { id: restaurantId } });

      commit(types.HIDE_LOADING);
   }
};

export default actions;