import request from '../common/request';

export async function loadOrder () {
   const result = await request({
      url:'http://49.235.98.65:8889/order/5e219e0aa274ef537609fe86',
      method:'get'
   });
   return result;
}