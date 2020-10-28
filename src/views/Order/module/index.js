// import * as types from '@/store/mutation-type';
import { loadOrder as loadOrderReq } from '@/request/order';

const order = {

   state:{
      show: false
   },
   actions:{
      async loadOrder (){
         await loadOrderReq();
      }
   },
   mutations:{

   }
};

export default order;