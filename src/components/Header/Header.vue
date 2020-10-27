<template>
  <div class="header">
    <!-- header-left 跳转到restaurant页面 -->
    <div class="header-left">
      <img
        src="../../assets/logo.png"
        alt=""
      >
    </div>
    <!-- header-right 点击后，出现一个框体 -->
    <div
      class="header-right"
      @click="ToShowDown"
    >
      <img
        src="../../assets/profile-icon.png"
        alt=""
      >
    </div>
    <!-- header-right-down 点击后出现的框体 -->
    <div
      v-show="showDown"
      class="header-right-down"
    >
      <!-- 登录 -->
      <button class="down-login">
        登录
      </button>
      <!-- 切换中英文 -->
      <div class="down-language">
        <button>中</button>
        <button>En</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'Header',
   data () {
      return {
         showDown: false
      };
   },
   methods:{
      ToShowDown (){
         this.showDown = !this.showDown;
      }
   }

};
</script>
<style scoped lang="scss">
@import './header'
</style>