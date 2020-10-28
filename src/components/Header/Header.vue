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
        {{ $t('login.login') }}
      </button>
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

      /* 点击后出现框体 */
      ToShowDown (){
         this.showDown = !this.showDown;
      },

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