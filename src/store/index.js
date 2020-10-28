import Vue from 'vue';
import Vuex from 'vuex';

/* global */
<<<<<<< HEAD
=======
import error from './error.js';
>>>>>>> 8443f2f3aa66e848b64bebe14c90b6a20b8e1ad8
import loading from './loading';

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

