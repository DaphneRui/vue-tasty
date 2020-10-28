<<<<<<< HEAD
=======
import * as types from './mutation-type';

const loading = {

   state:{
      showLoading: false
   },
   mutations:{

      /* show loading */
      [types.SHOW_LOADING] (state){
         state.showLoading = true;
      },

      /* hide loading */
      [types.HIDE_LOADING] (state){
         state.showLoading = false;
      }
   }
};

export default loading;
>>>>>>> 2e82df53237e7e67e1dae1636b93e27248a0bbfa
