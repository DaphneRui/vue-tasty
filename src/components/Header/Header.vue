<template>
  <div class="header">
    <!-- header-left 跳转到restaurant页面 -->
    <div class="header-left">
      <img
        src="../../assets/logo.png"
        alt=""
        @click="jumpToRestaurant"
      >
    </div>

    <!-- header-right 点击后，出现一个框体 -->
    <div
      class="header-right"
    >
      <img
        src="../../assets/profile-icon.png"
        alt=""
        class="profile"
        @click="showDiv"
      >
      <HeaderModal
        v-if="showDown"
        :close="closeDiv"
      />
    </div>
  </div>
</template>

<script>
import HeaderModal from '../HeaderModal/HeaderModal';
export default {
   name: 'Header',
   components:{
      HeaderModal
   },
   data () {
      return {
         showDown:false
      };
   },
   methods:{
      /* 跳转到餐馆页面 */
      jumpToRestaurant (){
         this.$router.push('/restaurant');
      },
      showDiv (){
         this.showDown = true;
      },
      closeDiv (){
         this.showDown = false;
      }
   }
};
</script>

<style scoped lang="scss">
@import './header';
</style>