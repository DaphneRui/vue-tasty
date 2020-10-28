import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import error from './error.js';
import loading from './loading';
import language from './language';

/* page */
import order from '@/views/Order/module/index';
import login from '@/views/Login/module/index';
<<<<<<< HEAD
import menu from '@/views/Menu/module/index';
=======
import restaurant from '@/views/Restaurant/module/index';
>>>>>>> ae80018334413d9f0cc180ca57078db4e5762d84

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
   },
   mutations: {
   },
   actions: {
   },
   modules: {
      loading,
      order,
      error,
<<<<<<< HEAD
      menu
=======
      login,
      language,
      restaurant
>>>>>>> ae80018334413d9f0cc180ca57078db4e5762d84
   }
});

