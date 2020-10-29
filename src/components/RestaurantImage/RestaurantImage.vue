<template>
  <div class="restaurantImage">
    <div class="rest-box1">
      <div class="rest-food-name"></div>
      <div class="rest-image-box">
        <img
          src="../../assets/dark-dish.png"
          alt=""
          class="dish-image"
        >
      </div>
    </div>
    <div class="rest-box2">
      <div class="rest-food-name"></div>
      <div class="rest-image-box">
        <img
          src="../../assets/dark-dish.png"
          alt=""
          class="dish-image"
        >
      </div>
    </div>
    <div class="rest-box3">
      <div class="rest-food-name"></div>
      <div class="rest-image-box">
        <img
          src="../../assets/dark-dish.png"
          alt=""
          class="dish-image"
        >
      </div>
    </div>
  </div>
</template>

<script>

export default {
   name:'RestaurantImage',
   props: {
      item: {
         type: Object,
         require: true,
         default (){
            return {};
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
