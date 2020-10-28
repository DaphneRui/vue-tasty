import * as types from './mutation-types';

const error = {

   state:{
      showError: false
   },
   mutations:{

      /* show error */
      [types.SHOW_ERROR] (state){

         state.showError = true;
      },

      /* hide error */
      [types.HIDE_ERROR] (state){

         state.showError = false;
      }
   },
   actions:{

      showModel ({ commit }){

         commit(types.SHOW_ERROR);

      },
      closeModal ({ commit }){

         commit(types.HIDE_ERROR);
      }
   }
};

export default error;