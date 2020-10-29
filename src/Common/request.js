import axios from 'axios';
import _ from 'lodash';
// import { parse,compile } from 'path-to-regexp';
import CustomError from './customError';
// import { getStorage } from './utils';

/* 30 sec timeout */
axios.defaults.timeout = 3000;

/**
 * request
 */
const fetch = (options) => {

   let { url } = options;
   console.log('//////', options);
   const { data = {}, headers = {}, method } = options;

   // const token = _.get(getStorage('user'), '_id');
   // const token = _.get(getStorage('user'), 'token');
   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVwZGF0ZWRBdCI6IjIwMjAtMTAtMjJUMTE6MDQ6MzQuOTIyWiIsIl9pZCI6IjVmOTNlZDY3NzU2ZTNmNzZhN2E3M2EzZiIsInVzZXJuYW1lIjoibGFsYWxhIiwicGFzc3dvcmQiOiIkMmIkMTAkUUlnWS9acUtZaTU3djFiUFlQZy9NTzJmdnJoOEVCNXMwdnJKZXNWZ3Vsd0Fua2NNU0JNSksiLCJuaWNrbmFtZSI6IiIsImNyZWF0ZWRBdCI6IjIwMjAtMTAtMjRUMDk6MDE6MjcuMjY4WiIsIl9fdiI6MH0sImlhdCI6MTYwMzg1MDcwMSwiZXhwIjoxNjA0MTA5OTAxfQ.L1lgu19LYXPDrnqe0pTV2iW4O0oepXOalrY96HOT4SE';

   if (token) {
      headers.Authorization = `${token}`;
   }

   // const token = _.get(getStorage('user'), 'token');

   // if (token) {
   //    headers.Authorization = `${token}`;
   // }

   headers['Content-Type'] = 'application/json';

   /* cache */
   headers['Cache-Control'] = 'no-cache';

   /* Clone request body data */
   const cloneData = _.cloneDeep(data);

   // try {
   //    let domin = '';

   //    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
   //       const { 0: val } = url.match(/[a-zA-z]+:\/\/[^/]*/);

   //       domin = val;
   //       url = url.slice(domin.length);
   //    }

   //    const match = parse(url);

   //    url = compile(url)(data);

   //    _.forEach(match, item => {

   //       if (item instanceof Object && item.name in cloneData) {
   //          delete cloneData[item.name];
   //       }
   //    });
   //    url = domin + url;

   // } catch (e) {

   //    console.log(e);
   //    _.noop();
   // }

   switch (_.toLower(method)) {
   case 'get':
      return axios.get(url, { params: cloneData, headers });
   case 'delete':
      return axios.delete(url, { data: cloneData, headers });
   case 'post':
      return axios.post(url, cloneData, { headers });
   case 'put':
      return axios.put(url, cloneData, { headers });
   case 'patch':
      return axios.patch(url, cloneData, { headers });
   default:
      return axios(options);
   }
};

/**
   * Default request function
   */
export default async function request (options) {

   try {
      const res = await fetch(options);
      let data = _.get(res, 'data', {});

      /* convert list to object */
      if (_.isArray(data)) {
         data = { list: data };
      }

      return data;
   } catch (error) {

      //   console.log(error);
      // throw new Error(error.message);
      throw new CustomError(error);
      //   throw error;
   }
}