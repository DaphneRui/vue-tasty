import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import error from './error.js';
import loading from './loading';
import language from './language';

/* page */
import order from '@/views/Order/module/index';
import login from '@/views/Login/module/index';
import restaurant from '@/views/Restaurant/module/index';

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
      login,
      language,
      restaurant
   }
});

