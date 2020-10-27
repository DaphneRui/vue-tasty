import Vue from 'vue';
import VueRouter from 'vue-router';
<<<<<<< HEAD

=======
>>>>>>> 58cf15fd0213956e2b786617bdb0f2cc9f9247af

Vue.use(VueRouter);

const routes = [
<<<<<<< HEAD
   {
      path: '/error',
      name: 'error',
      component: () => import ('@/components/errorModal/errorModal.vue')
   },
   
=======

>>>>>>> 58cf15fd0213956e2b786617bdb0f2cc9f9247af
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
});

export default router;
