import request from '../common/request';

export async function getMenu () {

   const result = await request({

      url:'http://49.235.98.65:8889/menu/restaurantId/59879867376b1e0011183f83',
      method:'get',

   });
   console.log('请求==>',result);

   return result;
}