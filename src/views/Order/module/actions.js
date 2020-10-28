import * as types from '../../../store/mutation-type';
import { loadOrder } from '../../../request/order';
import _ from 'lodash';
import { getStorage } from '../../../common/utils';

const actions = {
   async loadOrderActions ({ commit }){
      commit(types.SHOW_LOADING);
      try {
         const user = _.get(getStorage('user'),{ id:'5e219e0aa274ef537609fe86' });
         const order = await loadOrder({ user });
         commit(types.LOAD_ORDER,{ order:order.list });
      } catch (error) {
         commit(types.LOAD_ORDER,{ message:error.message });
      }finally{
         commit(types.HIDE_LOADING);
      }
   }
};

export default actions;