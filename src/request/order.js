import request from '../common/request';

export async function loadOrder () {
   const result = await request({
      url:'http://49.235.98.65:8889/order/5f93ed67756e3f76a7a73a3f',
      method:'get',

   });
   return result;
}