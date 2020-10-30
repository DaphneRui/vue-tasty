import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: '/',
      redirect:'/restaurant'
   },
   {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login/Login.vue')
   },
   {
      path: '/menu/:id',
      name: 'Menu',
      component: () => import('../views/Menu/Menu.vue')
   },
   {
      path: '/order',
      name: 'Order',
      component: () => import('../views/Order/Order.vue')
   },
   {
      path: '/restaurant',
      name: 'Restaurant',
      component: () => import('../views/Restaurant/Restaurant.vue')
   },
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

export default router;
