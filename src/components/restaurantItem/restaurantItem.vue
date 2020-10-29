<template>
  <div class="restaurantItem">
    <div class="title-text">
      {{ item.name[`${lang}`] }}
    </div>
    <div class="subTitleTexts">
      <div
        v-for="(subTitle,index) in item.tags "
        :key="index"
        class="subTitleText"
      >
        {{ subTitle }}
      </div>
    </div>
    <div
      v-for="(imgages,index) in item.items "
      :key="index"
      class="img-boxs"
    >
      <rest-img
        :item="imgages"
      ></rest-img>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import restImg from '../RestaurantImage/RestaurantImage';

export default {
   name:'RestaurantItem',
   components: {
      restImg
   },
   props: {
      item: {
         type: Object,
         require: true,
         default (){
            return {};
         }
      }
   },
   data (){
      return{

      };
   },
   computed:{
      ...mapState({
         'lang': state => state.language.lang
      }),
      //   name (){
      //      return this.$props.item.name[`${this.lang}`];
      //   }
   },
};
</script>

<style scoped lang="scss">
@import './restaurantItem'
</style>
