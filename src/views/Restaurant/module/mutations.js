import * as types from '@/store/mutation-type';
const mutations = {
   [types.SET_REST_LIST] (state, data) {
      state.restList = data.list;
   }
};

export default mutations;