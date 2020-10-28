<template>
  <div class="restaurant">
    <div class="restaurant-container">
      <div class="rest-tab">
        <h1>{{ $t('restaurant.allRestaurant') }}</h1>
        <div class="rectangle"></div>
      </div>
      <div class="rest-boxs">
        <div
          v-for="item in list"
          :key="item._id"
          class="rest-box"
        >
          <rest-item :item="item"></rest-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import restItem from '@/components/RestaurantItem/RestaurantItem';
import { mapActions,mapState } from 'vuex';
export default {
   name:'Restaurant',
   components: {
      // restItem
   },
   data () {
      return {

      };
   },
   computed: {
      ...mapState({
         'list': state => state.restaurant.restList
      }),
   },
   created () {
      this.setRestList();
   },
   methods: {
      ...mapActions([
         'setRestList'
      ]),
   },
};
</script>

<style scoped lang="scss">
@import './restaurant'
</style>
