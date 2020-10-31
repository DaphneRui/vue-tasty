import request from '../common/request';
import { host } from '../common/config';

export async function menu ({ restaurantId }) {

   const result = await request({

      url:`${host}menu/restaurantId/${ restaurantId }`,
      method:'get',

   });
   console.log('请求==>',result);

   return result;
}