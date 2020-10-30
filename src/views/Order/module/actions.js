import * as types from '../../../store/mutation-type';
import { loadOrder } from '../../../request/order';
// import _ from 'lodash';
// import { getStorage } from '../../../common/utils';

const actions = {
   async loadOrderActions ({ commit }){
      try {
         commit(types.SHOW_LOADING);
         // const userId = '59879867376b1e0011183f83';
         //  const userId = _.get(getStorage('user'),id);
         const list = await loadOrder();
         commit(types.LOAD_ORDER,list );
         console.log('actions======>list',list);
      } catch (error) {
         commit(types.LOAD_ORDER,{ message: error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   }
};

export default actions;