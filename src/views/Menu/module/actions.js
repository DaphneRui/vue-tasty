import * as types from '@/store/mutation-type';
import  { getMenu as getMenuReq }  from '@/request/getMenu';

const actions = {

   async getMenu ({ commit }){

      const   data   = await getMenuReq();

      // console.log( 'data===>', data  );

      commit(types.SET_MENU,data );

      // console.log(data);
   }
};

export default actions;