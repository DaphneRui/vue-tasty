<template>
  <div class="restaurant">
    <div class="restaurant-container">
      <div class="rest-tab">
        <h1>{{ $t('restaurant.allRestaurant') }}</h1>
        <div class="rectangle"></div>
      </div>
      <div class="rest-boxs">
        <!-- 循环输出各个餐馆 按奇偶数分两列 -->
        <div>
          <rest-item
            v-for="item in splitColumns.leftColumn"
            :key="item._id"
            :item="item"
          ></rest-item>
        </div>
        <div class="rightColumn">
          <rest-item
            v-for="item in splitColumns.rightColumn"
            :key="item._id"
            :item="item"
          ></rest-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment-timezone';
import restItem from '@/components/RestaurantItem/RestaurantItem';
import { mapActions,mapState } from 'vuex';
export default {
   name:'Restaurant',
   components: {
      restItem
   },
   data () {
      return {

      };
   },
   computed: {
      ...mapState({
         'list': state => state.restaurant.restList
      }),
      /* 按奇偶数分两列 */
      splitColumns (){
         const leftColumn = [];
         const rightColumn = [];
         _.forEach(this.list,(item,index)=>{
            if(index % 2 === 0){
               leftColumn.push(item);
            }else{
               rightColumn.push(item);
            }
         });
         return{
            leftColumn,
            rightColumn
         };
      }
   },
   created () {
      this.setRestList();
   },
   methods: {
      ...mapActions([
         'setRestList'
      ]),
      /* 排序 */
      sortRestList (list){
         _.orderBy(list,[ 'featured','zscore' ],[ 'desc','desc' ]);
         // _.forEach(list,(item)=>{

         // })
      }
   },
};
</script>

<style scoped lang="scss">
@import './restaurant'
</style>
