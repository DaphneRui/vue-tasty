import actions from './actions';
import mutations from './mutations';
import { getStorage } from '../../../common/utils';

/* login的vuex里面定义数据 */
const login = {
   state:{
      user:getStorage('userInfo') || {}
   },
   actions,
   mutations
};

export default login;