import Vue from 'vue';
import Vuex from 'vuex';

/* global */
<<<<<<< HEAD
import error from './error.js';
=======
>>>>>>> bb4bb908cdd0e36b5ccd69a0bb39e249c1adb17e
import loading from './loading';
import error from './error';

/* page */
import login from '@/views/Login/module';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
   },
   mutations: {
   },
   actions: {
   },
   modules: {
      login,
      error,
      loading
   }
});

