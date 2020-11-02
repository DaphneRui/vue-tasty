import Vue from 'vue';
import VueRouter from 'vue-router';
// import _ from 'lodash';
// import { getStorage } from '../common/utils';
Vue.use(VueRouter);

const routes = [
   // {
   //    path: '/',
   //    name: '/',
   //    redirect:'/restaurant'
   // },
   {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login/Login.vue'),
      /* 在进入login页面之前判断localstorage里面是否存有用户信息，如果有，则直接跳转到restaurant页面，如果没有，则正常跳转 */
      // beforeEnter: (to, from, next) => {

      //    if(_.get(getStorage('userInfo'),'token')) {
      //       next({
      //          path:'/restaurant'
      //       });
      //    }else{
      //       next();
      //    }
      // }
   },
   {
      path: '/menu/:id',
      name: 'Menu',
      meta:{ requireLogin:false },
      component: () => import('../views/Menu/Menu.vue')
   },
   {
      path: '/order',
      name: 'Order',
      /* 传入参数，表示进入这个页面之前是一定要登录的 */
      meta:{ requireLogin:true },
      component: () => import('../views/Order/Order.vue'),
      // beforeEnter: (to, from, next) => {
      //    if(!_.get(getStorage('userInfo'),'token')) {
      //       next({
      //          path:'/restaurant'
      //       });
      //    }else{
      //       next();
      //    }
      // }
   },
   {
      path: '/restaurant',
      name: 'Restaurant',
      meta:{ requireLogin:false },
      component: () => import('../views/Restaurant/Restaurant.vue')
   }
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

export default router;

/* 路由守卫，进行登录态检测 */
// router.beforeEach((to, from, next) => {
//    const requireLogin = to.meta.requireLogin;

//    if(to.path === '/login'){
//       next();
//    }
//    if(!requireLogin){
//       /* 不需要登录，正常跳转 */
//       next();
//    }else{
//       /* 需要检测是否登录 */
//       console.log('else');
//       if(!_.get(getStorage('userInfo'),'token')){
//          /* 未登录，跳转到restaurant页面 */
//          next({
//             path:'/restaurant'
//          });
//       }
//    }
// });
