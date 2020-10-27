import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
   {
      path: '/error',
      name: 'error',
      component: () => import ('@/components/errorModal/errorModal.vue')
   },
   
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

export default router;
