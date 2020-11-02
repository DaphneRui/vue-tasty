import request from '../common/request';

/* 发送regist请求，将用户输入的用户名和密码传过来，result是请求之后返回的相应的用户的数据 */
export async function regist (user){
   console.log('regist', user);
   const result = await request({
      url:'http://49.235.98.65:8889/user/register',
      method:'post',
      data: user
   });
   return result;
}