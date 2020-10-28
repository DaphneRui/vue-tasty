import * as types from '@/store/mutation-type';
import { restaurant } from '@/request/restaurant';

const actions =  {
   async setRestList ({ commit }){
      try {
         const { list } = await restaurant();
         commit(types.SET_REST_LIST,{ list });
         console.log(list);
      } catch (error) {
         commit(types.SET_REST_LIST,{ message: error.message });
      }
   },
};

export default actions;