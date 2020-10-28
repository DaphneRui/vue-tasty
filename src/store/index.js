import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import error from './error.js';
import loading from './loading';

/* page */
import order from '@/views/Order/module/index';
import error from './error';

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
      login,
      error,
   }
});

