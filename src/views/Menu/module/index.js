import actions from './actions';
import mutations from './mutations';

const menu = {
   state:{
      menuList:{
         categories:[],
         foods:[]
      }
   },
   actions,
   mutations
};

export default menu;