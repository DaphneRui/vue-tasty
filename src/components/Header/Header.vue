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
    </div>
    <!-- header-right-down 点击后出现的框体 -->
    <div
      v-show="showDown"
      ref="proBox"
      class="header-right-down"
    >
      <!-- 登录 -->
      <button
        v-if="showLogin"
        class="down-login"
        @click="jumpToLogin"
      >
        {{ $t('login.login') }}
      </button>

      <!-- 历史订单 -->
      <button
        v-if="showHistory"
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
        v-if="showLogout"
        class="down-logout"
        @click="logout"
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
   computed:{
      ...mapState({
         'lang': state => state.language.lang
      }),
   },
   methods:{
      ...mapActions([
         'setLanguage',
         'clearData'
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
      logout (){
         this.showLogin = true;
         this.showLogout = false;
         this.showHistory = false;
         this.clearData();
      },
      showDiv (){
         this.showDown = true;
         document.addEventListener('mousedown',this.clickListener);

         console.log(_.get(getStorage('userInfo'),'token'));
         if(_.get(getStorage('userInfo'),'token')){
            if(this.$route.path === '/order'){
               this.showLogout = true;
               this.showLogin = false;
               //  this.showHistory = false;
            }else{
               this.showHistory = true;
               this.showLogout = true;
               this.showLogin = false;
            }
         }else{
            if(this.$route.path !== '/login'){
               this.showLogin = true;
            }
         }
      },
      clickListener (e){

         const ref = this.$refs.proBox;

         if(ref && ref.contains(e.target)){
            // this.showDown = true;
            console.log(123);
         }else {
            this.showDown = false;
            document.removeEventListener('mousedown',this.clickListener,true);
         }
      },
      // isShowBtn (){

      //    console.log('this.$router.currentRoute.path===>',this.$router.currentRoute.path);

      // }
   }

};
</script>
<style scoped lang="scss">
@import './header'
</style>