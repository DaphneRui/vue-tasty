import request from '../common/request';
import { host } from '../common/config';

export async function loadOrder () {
   const result = await request({
      url:`${host}order/5e219e0aa274ef537609fe86`,
      method:'get'
   });
   return result;
}