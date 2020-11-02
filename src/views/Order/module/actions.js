import * as types from '../../../store/mutation-type';
import { loadOrder } from '../../../request/order';
import _ from 'lodash';
import { getStorage } from '../../../common/utils';

const actions = {
   async loadOrderActions ({ commit }){
      try {
         commit(types.SHOW_LOADING);
         const userId = _.get(getStorage('userInfo'),'_id');
         const list = await loadOrder(userId);
         commit(types.LOAD_ORDER,list );
      } catch (error) {
         commit(types.LOAD_ORDER,{ message: error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   }
};

export default actions;