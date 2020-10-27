import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
   {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login/Login.vue')
   },
   {
      path: '/menu',
      name: 'Menu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
