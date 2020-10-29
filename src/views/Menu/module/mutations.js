import * as types from '@/store/mutation-type';

const mutations = {
   /* menu 数据存放到 vuex */
   [types.SET_MENU] (state,data){

      // let foods = data.foods;
      // let tempArr = [];
      // let Data = [];

      // for (let i = 0; i < foods.length; i++){

      //    if(tempArr.indexOf(foods[i].category._id) === -1){

      //       Data.push({
      //          id:foods[i].category._id,
      //          child:[ foods[i] ]
      //       });
      //       tempArr.push(foods[i].category._id);

      //    }else{
      //       for (let j = 0; j < Data.length; j++){

      //          if(Data[j].id === foods[i].category._id){
      //             Data[j].child.push(foods[i]);
      //             break;
      //          }
      //       }
      //    }
      // }
      // console.log(Data);
      state.menuList.categories = data.categories;
      state.menuList.foods = data.foods;
   },
};

export default mutations;