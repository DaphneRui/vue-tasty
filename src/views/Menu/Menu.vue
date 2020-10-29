<template>
  <div class="menu-box">
    <div class="titleText">
      邓记云南过桥米线{{ }}
    </div>
    <div class="subTitleText">
      面类
    </div>
    <div class="all-category-box">
      <div
        v-for="(categories,index) in menuCategories"
        :key="index"
        class="category-box"
      >
        <!-- 种类 -->
        <div class="titleText">
          <!-- {{ categories._id }} -->
        </div>
        <div class="rectangle"></div>

        <!-- 循环foods -->
        <div
          v-for="(item,index) in menuFoods"
          :key="index"
        >
          <!-- <MenuCom
            :foods="menuFoods"
          ></MenuCom> -->
          <!-- <div>{{ item.category._id }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Menu.scss';

/* component */
// import MenuCom from '../../components/MenuCom/MenuCom';
import { mapActions,mapState } from 'vuex';

export default {
   name:'Menu',
   //  components:{ MenuCom },

   computed:{
      ...mapState({
         /* menu 是一个对象 里面放着数组 */
         menu:state=>state.menu.menuList
      }),
      /* 菜单的分类 */
      menuCategories:function (){

         return this.menu.categories;
      },
      /* 分类后的foods */
      menuFoods (){
         return this.menu.foods;
      }
   },

   created (){
      /* 获取 menu */
      this.getMenu();
      this.renderList();

   },

   methods:{
      ...mapActions([ 'getMenu' ]),

      renderList (){
         console.log(this);
      }

   }
};
</script>
