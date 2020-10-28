import * as types from './mutation-type';

const loading = {

   state:{
      show: false
   },
   mutations:{

      /* show loading */
      [types.SHOW_LOADING] (state){
         state.show = true;
      },

      /* hide loading */
      [types.HIDE_LOADING] (state){
         state.show = false;
      }
   }
};

export default loading;