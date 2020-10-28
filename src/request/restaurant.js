import request from '../common/request';

export async function restaurant () {
   const result = await request({
      url:'http://49.235.98.65:8889/restaurant/location/-74.0059413,40.7127837',
      method:'get'
   });
   return result;
}