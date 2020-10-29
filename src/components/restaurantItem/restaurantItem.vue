<template>
  <div
    class="restaurantItem"
    @mouseover="changeStyle"
    @mouseleave="resumeStyle"
    @click="toMenu"
  >
    <!-- 餐馆名字 -->
    <div class="title-text">
      {{ name }}
    </div>

    <!-- 餐馆分类 -->
    <div class="subTitleTexts">
      <div
        v-for="(subTitle,index) in subTitleText "
        :key="index"
        class="subTitleText"
      >
        {{ subTitle }}
      </div>
    </div>

    <!-- 餐馆特色菜 -->
    <div class="img-boxs">
      <!-- 第一个特色菜 -->
      <div class="rest-box1">
        <!-- 菜品名字 -->
        <div
          v-show="isChange"
          class="rest-food-name"
        >
          {{ imageName1[`${lang}`] }}
        </div>
        <!-- 菜品图片 -->
        <div class="rest-image-box">
          <rest-img :item="imageUrl1"></rest-img>
        </div>
      </div>

      <!-- 第二个特色菜 -->
      <div
        class="rest-box2"
        :style="{left: isChange ? '55.6%':''}"
      >
        <!-- 菜品名字 -->
        <div
          v-show="isChange"
          class="rest-food-name"
        >
          {{ imageName2[`${lang}`] }}
        </div>
        <!-- 菜品图片 -->
        <div class="rest-image-box">
          <rest-img :item="imageUrl2"></rest-img>
        </div>
      </div>

      <!-- 第三个特色菜 -->
      <div class="rest-box3">
        <!-- 菜品名字 -->
        <div
          v-show="isChange"
          class="rest-food-name"
        >
          {{ imageName3[`${lang}`] }}
        </div>
        <!-- 菜品图片 -->
        <div class="rest-image-box">
          <rest-img :item="imageUrl3"></rest-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
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
         /* 是否改变样式 */
         isChange: false,
         /* 渲染补充数组 */
         defaultItems: [
            {
               name: {
                  'zh-CN': '红烧狮子头',
                  'en-US': 'Stewed Lion Head Chinese Meatballs'
               },
               image: 'https://s3.amazonaws.com/ricepo-food/image-3r7hnd04jyk7nbn3.png'
            },
            {
               name:  {
                  'zh-CN': '三杯鸡',
                  'en-US': 'Three Cups Chicken'
               },
               image: 'https://s3.amazonaws.com/ricepo-food/image-5b7jxyy2jvu95frk.png'
            },
            {
               name: {
                  'zh-CN': '番茄鸡蛋面',
                  'en-US': 'Tomato Egg Noodle'
               },
               image:     'https://s3.amazonaws.com/ricepo-food/image-o1bt3qsjz0fhei4.png'
            }
         ]
      };
   },
   computed:{
      /* 获取语言 */
      ...mapState({
         'lang': state => state.language.lang
      }),
      /* 餐馆名字 */
      name (){
         /* 餐馆名字 根据语言变化 */
         return this.$props.item.name[`${this.lang}`];
      },
      /* 餐馆分类 */
      subTitleText (){
         let subTitle = [];
         /* 遍历tags 根据语言变化 */
         _.forEach(this.$props.item.tags,(item)=>{
            subTitle.push(this.$t(`tags.${item}`));
         });
         return subTitle;
      },
      /* 菜品名字 */
      imageName1 (){

         return _.get(this.$props.item,'items[0].name',this.defaultItems[0].name);
      },
      imageName2 (){
         return _.get(this.$props.item,'items[1].name',this.defaultItems[1].name);
      },
      imageName3 (){
         return _.get(this.$props.item,'items[2].name',this.defaultItems[2].name);
      },
      /* 菜品图片 */
      imageUrl1 (){

         console.log(this.defaultItems[0].image);
         return _.get(this.$props.item,'items[0].image.url',this.defaultItems[0].image);
      },
      imageUrl2 (){
         return _.get(this.$props.item,'items[1].image.url',this.defaultItems[1].image);
      },
      imageUrl3 (){
         return _.get(this.$props.item,'items[2].image.url',this.defaultItems[2].image);
      }
   },
   methods: {
      /* 点击跳转到菜单 */
      toMenu (){
         console.log('跳转');
      },
      /* mouseover 样式变化 */
      changeStyle (){
         this.isChange = true;
      },
      /* mouseleave 样式恢复 */
      resumeStyle (){
         this.isChange = false;
      }

   },
};
</script>

<style scoped lang="scss">
@import './restaurantItem'
</style>
