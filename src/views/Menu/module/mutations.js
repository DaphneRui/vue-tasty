import * as types from '@/store/mutation-type';

const mutations = {
   /* menu 数据存放到 vuex */
   [types.SET_MENU] (state,data){
      state.menuList.categories = data.categories;
      state.menuList.foods = data.foods;
   },
};

export default mutations;