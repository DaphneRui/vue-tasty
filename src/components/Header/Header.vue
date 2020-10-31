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
      >
    </div>
    <!-- header-right-down 点击后出现的框体 -->
    <div
      v-show="showDown"
      class="header-right-down"
    >
      <!-- 登录 -->
      <button
        v-show="showLogin"
        class="down-login"
        @click="jumpToLogin"
      >
        {{ $t('login.login') }}
      </button>

      <!-- 历史订单 -->
      <button
        v-show="showHistory"
        class="down-order"
      >
        {{ $t('order.title') }}
      </button>

      <!-- 切换中英文 -->
      <div class="down-language">
        <button
          :class="$i18n.locale == 'zh-CN' ? 'on-choose' : ''"
          @click="changeLang('zh-CN')"
        >
          中
        </button>
        <button
          :class="$i18n.locale == 'en-US' ? 'on-choose' : ''"
          @click="changeLang('en-US')"
        >
          En
        </button>
      </div>

      <!-- 登出 -->
      <button
        v-show="showLogout"
        class="down-logout"
      >
        {{ $t('logout') }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import { getStorage } from '../../common/utils';
import _ from 'lodash';
export default {
   name: 'Header',
   data () {
      return {
         showDown: false,
         showLogin:false,
         showLogout:false,
         showHistory:false
      };
   },
   created () {
      this.isShowBtn();
   },
   computed:{
      ...mapState({
         'lang': state => state.language.lang
      }),
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
      ...mapActions([
         'setLanguage'
      ]),
      /* 切换中英文 */
      changeLang (lang) {
         this.$i18n.locale = lang;
         this.setLanguage(lang);
      },
      jumpToRestaurant (){
         this.$router.push('/restaurant');
      },
      jumpToLogin (){
         this.$router.push('/login');
      },
      // logout (){
      //    if(this.$route.path === '/order'){
      //       this.showLogin = true;
      //       this.showLogout = false;
      //    }
      // }
      isShowBtn (){
         if(_.get(getStorage('userInfo'),'token')){
            if(this.$route.path === '/order'){
               this.showLogout = true;
            }else{
               this.showHistory = true;
               this.showLogout = true;
            }
         }else{
            if(this.$route.path !== '/login'){
               this.showLogin = true;
            }
         }
      }
   }

};
</script>
<style scoped lang="scss">
@import './header'
</style>