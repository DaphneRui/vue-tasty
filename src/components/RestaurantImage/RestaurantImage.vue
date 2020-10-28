<template>
  <div class="restaurantItem">
    <div class="title-text">
      {{ item.name }}
    </div>
    <div
      v-for="(subTitle,index) in item.tags "
      :key="index"
      class="subTitleText"
    >
      {{ subTitle }}
    </div>
  </div>
</template>

<script>

export default {
   name:'RestaurantItem',
   props: {
      item: {
         type: Array,
         require: true,
         default (){
            return [];
         }
      }
   },
};
</script>

<style scoped lang="scss">
@import './restaurantItem'
</style>
