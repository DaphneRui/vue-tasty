import request from '../common/request';

export async function loadOrder (userId) {
   const result = await request({
      // url:'http://49.235.98.65:8889/order/5f93ed67756e3f76a7a73a3f',
      url:`http://49.235.98.65:8889/order/${userId}`,
      method:'get',
   });
   return result;
}

export async function placeOrder (data) {
   const result = await request({
      url:'http://49.235.98.65:8889/order',
      method:'put',
      data
   });
   return result;
}