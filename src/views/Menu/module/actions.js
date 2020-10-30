import * as types from '@/store/mutation-type';
import  { getMenu as getMenuReq }  from '@/request/getMenu';

const actions = {

   async getMenu ({ commit }){

      try{

         const   data   = await getMenuReq();
         commit(types.SET_MENU,data );

      }catch(error){

         commit(types.SET_MENU,{ message: error.message } );
      }

   }
};

export default actions;