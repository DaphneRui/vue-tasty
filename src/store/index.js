import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import error from './error.js';
import loading from './loading';

/* page */
// import login from '@/views/Login/module';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
   },
   mutations: {
   },
   actions: {
   },
   modules: {
      error,
      loading
   }
});

