import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import error from './error.js';
import loading from './loading';
import language from './language';
import regist from '@/components/RegistModal/module/index';
/* page */
import order from '@/views/Order/module/index';
import login from '@/views/Login/module/index';
import menu from '@/views/Menu/module/index';
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
      menu,
      login,
      language,
      restaurant,
      regist
   }
});

