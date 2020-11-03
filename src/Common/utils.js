/* 引入加密所需的依赖 */
import crypto from 'crypto';
import _ from 'lodash';
import moment from 'moment-timezone';

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

/* 检测用户名 */
export function checkName (name){
   let pattern = /^[a-zA-Z0-9_-]{4,16}$/;
   return pattern.test(name);
}
/* 检测密码 */
export function checkPassword (password){
   var pattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
   return pattern.test(password);
}

/* 验证餐馆是否关闭 */
export function checkRestaurantClosed (restaurant){
   const date = new Date();
   /* 纽约时间 */
   const timezone = _.get(restaurant, 'timezone');
   const currentTime = moment.tz(date, timezone);
   const newYorkTime = currentTime.hours() * 60 + currentTime.minutes();
   /* 星期几 */
   const currentWeek = currentTime.day();
   /* 营业时间 */
   const index = currentWeek - 1;
   const bankingHour = _.get(restaurant,`hours[${index}]`);
   /* 开始时间 */
   const startHour = _.get(bankingHour, 'start');
   /* 结束时间 */
   const endHour = _.get(bankingHour, 'end');
   /* 是否在营业时间 */
   if (newYorkTime > endHour || newYorkTime < startHour) {
      return false;
   }
   /* 是否人为关闭 */
   const closed = _.get(restaurant, 'closed', null);
   if (closed !== null) {
      return false;
   }
   return true;

}

/* 获取购物车总价 */
export function getTotal (cart){
   let price = 0;

   if (!_.isEmpty(cart)) {
      _.forEach(cart, (item) => {
         price += item.price;
      });
   }

   return price;
}

/* 格式化价格 */
export function formatPrice (value){
   value = (value / 100).toFixed(2);
   return '$' + value;
}