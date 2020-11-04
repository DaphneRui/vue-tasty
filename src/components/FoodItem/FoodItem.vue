<template>
  <div>
    <div
      class="menu-food-item"
      :style="{opacity: item.available ? '' : 0.2}"
      @click="addCount"
    >
      <!-- 菜品计数 -->
      <div
        v-if="count !== 0"
        class="menu-count"
      >
        <div class="menu-count-text">
          {{ count }}
        </div>
      </div>

      <!-- 菜品名,菜品价格 -->
      <div
        class="containerBetween"
      >
        <div class="menu-text">
          {{ item.name[`${lang}`] }}
        </div>
        <div class="menu-price">
          {{ price | FormatPrice }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './foodItem.scss';
import { mapState,mapActions } from 'vuex';

import _ from 'lodash';
export default {
   name: 'FoodItem',
   props:{
      item:{
         type:Object,
         required:true,
      }
   },
   computed: {
      ...mapState({
      /* 控制中英文 */
         'lang': state => state.language.lang,

         /* 购物车数据 */
         'cart': state => state.cart.cart

      }),
      price (){
         return this.$props.item.price;
      },
      /* 菜品计数 */
      count (){
         /* 在购物车中寻找同种的菜品 */
         const index = _.findIndex(this.cart, { _id: this.$props.item._id });
         /* 菜品的数量 */
         let length = 0;
         /* 如果购物车中有菜品 */
         if (index !== -1) {
            const afterGroup = _.groupBy(this.cart, '_id');
            /* 获取菜品的数量 */
            _.forEach(afterGroup, (item, i) => {
               if (i === this.$props.item._id) {
                  length = item.length;
               }
            });
         }
         return length;
      }
   },
   methods: {
      ...mapActions([
         'addCart'
      ]),
      /* 添加菜品 */
      addCount (){
         if(!this.$props.item.available){
            return false;
         }
         this.addCart({ food: this.$props.item,cartId:this.$route.params.id });
      }
   },

};
</script>