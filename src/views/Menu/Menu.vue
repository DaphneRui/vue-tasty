<template>
  <div class="menu-box">
    <div class="titleText">
      邓记云南过桥米线
    </div>
    <div class="subTitleText">
      面类
    </div>
    <div
      class="all-category-box"
    >
      <div
        v-for="(item,id) in renderFoods"
        :key="id"
        class="category-box"
      >
        <div class="titleText">
          {{ item.cat.name[`${lang}`] }}
        </div>
        <div class="rectangle"></div>

        <div
          v-for="(obj,index) in item.child"
          :key="index"
          class="menu-food-item"
        >
          <div class="menu-count">
            <div class="menu-count-text"></div>
          </div>
          <div
            class="containerBetween"
          >
            <div class="menu-text">
              {{ obj.name[`${lang}`] }}
            </div>
            <div class="menu-price">
              {{ obj.price | Money }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Menu.scss';
import _ from 'lodash';

import { mapActions,mapState } from 'vuex';

export default {
   name:'Menu',
   filters:{
      Money: function (value){
         value = (value / 100).toFixed(2);
         return '$' + value;
      }
   },
   computed:{
      ...mapState({
         /* 控制中英文 */
         'lang': state => state.language.lang,

         /* 种类 */
         categories:state=>state.menu.menuList.categories,

         /* 菜单详情 */
         foods:state=>state.menu.menuList.foods,

         /* 重构数据 */
         renderFoods (){
            let foods = this.foods;
            let tempArr = [];
            let Data = [];

            for (let i = 0; i < foods.length; i++){

               if(tempArr.indexOf(foods[i].category._id) === -1){

                  Data.push({
                     id:foods[i].category._id,
                     cat:_.first(_.filter(this.categories,(item)=>{

                        return item._id === foods[i].category._id;
                     })),
                     child:[ foods[i] ]
                  });
                  tempArr.push(foods[i].category._id);

               }else{
                  for (let j = 0; j < Data.length; j++){

                     if(Data[j].id === foods[i].category._id){
                        Data[j].child.push(foods[i]);
                        break;
                     }
                  }
               }
            }
            //  _.orderBy(Data.child, [ 'available' ], [ 'desc' ]);
            let data1 = [];
            data1 = _.forEach(Data,(item)=>{
               console.log(item);
               return  _.orderBy(item.child, [ 'available' ], [ 'desc' ]);
            });

            // console.log('=======>',Data[0].child[0].available);
            return data1;
         },
         /* 排序 */
         //  orderByData (){
         //     _.forEach(this.renderFoods,(obj)=>{
         //        //  console.log('11111111',obj);
         //        //  _.orderBy(obj.child,);
         //        _.orderBy(obj.child, [ 'available' ], [ 'desc' ]);
         //     });
         //  }
      }),

   },

   created (){
      /* 获取 menu */
      this.getMenu();
      // this.setRestList();

   },

   methods:{
      ...mapActions([ 'getMenu','setRestList' ]),

   }
};
</script>
