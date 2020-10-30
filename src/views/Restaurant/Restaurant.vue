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
         const restList = this.sortRestList(this.list);
         const leftColumn = [];
         const rightColumn = [];
         _.forEach(restList,(item,index)=>{
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
         /* 根据开优先推荐,喜爱度排序 */
         const restList =  _.orderBy(list,[ 'featured','zscore' ],[ 'desc','desc' ]);
         /* 根据开关门排序 */
         const openedRestaurant = [];
         const closedRestaurant = [];
         _.forEach(restList,(item)=>{

            if(this.checkRestaurantClosed(item)){
               openedRestaurant.push(item);
            }else{
               closedRestaurant.push(item);
            }
         });

         return _.concat(openedRestaurant, closedRestaurant);

      },

      /* 验证餐馆是否关闭 */
      checkRestaurantClosed (restaurant){
         const date = new Date();
         /* 纽约时间 */
         const timezone = _.get(restaurant, 'timezone');
         const currentTime = moment.tz(date, timezone);
         const newYorkTime = currentTime.hours() * 60 + currentTime.minutes();
         /* 星期几 */
         const currentWeek = currentTime.day();
         /* 营业时间 */
         const index = currentWeek - 1;
         const bankingHour = _.get(restaurant,`hours[${index}]`);
         /* 开始时间 */
         const startHour = _.get(bankingHour, 'start');
         /* 结束时间 */
         const endHour = _.get(bankingHour, 'end');
         /* 是否在营业时间 */
         if (newYorkTime > endHour || newYorkTime < startHour) {
            return false;
         }
         /* 是否人为关闭 */
         const closed = _.get(restaurant, 'closed', null);
         if (closed !== null) {
            return false;
         }
         return true;

      }

   },
};
</script>

<style scoped lang="scss">
@import './restaurant'
</style>
