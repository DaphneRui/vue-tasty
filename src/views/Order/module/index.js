// import * as types from '@/store/mutation-type';
// import { loadOrder as loadOrderReq } from '@/request/order';
import actions from './actions';
import mutations from './mutations';

const order = {

   state:{
      orderList:[]
   },
   actions,
   mutations
};

export default order;