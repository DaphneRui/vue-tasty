/* 引入加密所需的依赖 */
import crypto from 'crypto';

/* 将数据存入localstorage里面 */
export function setStorage (key, data) {
   if(!key) return;
   localStorage.setItem(key, JSON.stringify(data));
}

/* 从localstorage中取数据 */
export function getStorage (key) {
   if(!key) return;
   let res = localStorage.getItem(key);
   try {
      return JSON.parse(res);
   } catch (err) {
      return res;
   }
}

/* 加密用户名，密码 */
export function encode (str){

   const cipher = crypto.createCipher('aes192', 'deliveryIsen');
   var crypted = cipher.update(str, 'utf8', 'hex');
   crypted += cipher.final('hex');
   return crypted;
}

