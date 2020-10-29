import * as types from '@/store/mutation-type';

const mutations = {
   /* menu 数据存放到 vuex */
   [types.SET_MENU] (state,data){

      state.menuList = data;
   },
};

export default mutations;