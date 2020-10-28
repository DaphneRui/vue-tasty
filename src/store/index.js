import Vue from 'vue';
import Vuex from 'vuex';

/* global */
import loading from './loading';

/* page */
import order from '@/views/Order/module/index';

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
      order
   }
});

