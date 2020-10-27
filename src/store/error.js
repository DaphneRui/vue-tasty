import * as types from './mutation-types';

const error = {

   state:{
      show: false
   },
   mutations:{

      /* show error */
      [types.SHOW_ERROR] (state){
         state.show = true;
      },

      /* hide error */
      [types.HIDE_ERROR] (state){
         state.show = false;
      }
   }
};

export default error;