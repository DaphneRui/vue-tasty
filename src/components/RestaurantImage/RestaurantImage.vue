<template>
  <div class="restaurantImage">
    <img
      src="../../assets/dark-dish.png"
      alt=""
      class="dish-image"
    >
    <img
      :src="item"
      alt=""
      class="food-image"
    >
  </div>
</template>

<script>

export default {
   name:'RestaurantImage',
   props: {
      item: {
         type: String,
         require: true,
         default (){
            return '';
         }
      }
   },
   computed:{
   }
};
</script>

<style scoped lang="scss">
@import './restaurantImage'
</style>
