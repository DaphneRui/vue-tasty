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
    >
      <img
        src="../../assets/profile-icon.png"
        alt=""
        class="profile"
      >
    </div>
    <!-- header-right-down 点击后出现的框体 -->
    <div
      v-show="showDown"
      class="header-right-down"
    >
      <!-- 登录 -->
      <button class="down-login">
        {{ $t('login.login') }}
      </button>

      <!-- 历史订单 -->
      <!-- <button class="down-order">
        {{ $t('order.title') }}
      </button> -->

      <!-- 切换中英文 -->
      <div class="down-language">
        <button
          :class="$i18n.locale == 'zh' ? 'on-choose' : ''"
          @click="changeLang('zh')"
        >
          中
        </button>
        <button
          :class="$i18n.locale == 'en' ? 'on-choose' : ''"
          @click="changeLang('en')"
        >
          En
        </button>
      </div>

      <!-- 登出 -->
      <!-- <button class="down-logout">
        {{ $t('logout') }}
      </button> -->
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
   mounted (){
      /* 点击头像后出现框体,点击其他地方框体消失 */
      document.addEventListener('click',(e)=>{
         if(e.target.className === 'profile'){
            this.showDown = true;
         }else {
            this.showDown = false;
         }
      });
      /* 点击框体内部不让框体消失 */
      document.getElementsByClassName('header-right-down')[0].addEventListener('click',(e)=>{
         e.stopPropagation();
      });
   },
   methods:{

      /* 切换中英文 */
      changeLang (lang) {
         this.$i18n.locale = lang;
      }
   }

};
</script>
<style scoped lang="scss">
@import './header'
</style>