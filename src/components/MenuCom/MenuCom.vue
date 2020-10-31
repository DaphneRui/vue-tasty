<template>
  <div
    class="category-box"
  >
    <!-- 菜品分类 -->
    <div class="titleText">
      {{ categories.name[`${lang}`] }}
    </div>
    <div class="rectangle"></div>

    <div>
      <food-item
        v-for="item in foods"
        :key="item._id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import './MenuCom.scss';
import { mapState } from 'vuex';
import FoodItem from '@/components/FoodItem/FoodItem';
export default {
   name:'MenuComponent',
   components:{
      FoodItem
   },
   props:{
      foods:{
         type:Array,
         required:true,
      },
      categories:{
         type:Object,
         required:true,
      }
   },
   data () {
      return {

      };
   },
   computed: {
      ...mapState({
         /* 控制中英文 */
         'lang': state => state.language.lang,

         /* 购物车数据 */
         'cart': state=> state.cart.cart

      }),
   },
   created (){
      // console.log(this.$props.foods);
   },

};
</script>