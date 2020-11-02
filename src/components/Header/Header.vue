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
        @click="jumpToHistory"
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
         /* 四个状态控制头部框和头部按钮的显示和隐藏 */
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
      /* 跳转到餐馆页面 */
      jumpToRestaurant (){
         this.$router.push('/restaurant');
      },
      /* 跳转到login页面 */
      jumpToLogin (){
         this.$router.push('/login');
      },
      /* 点击登出按钮，清除浏览器和vuex数据 */
      logout (){
         this.showLogin = true;
         this.showLogout = false;
         this.showHistory = false;
         this.clearData();
      },
      /* 点击头像icon，显示头部框 */
      showDiv (){
         this.showDown = true;
         document.addEventListener('mousedown',this.clickListener);
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
      /* 增加一个监听器，点击头部框以外的区域，让这个框消失 */
      clickListener (e){
         /* 给头部框绑定一个ref值 */
         const ref = this.$refs.proBox;
         /* 判断条件表示当头部框显示并且鼠标点击区域包含在头部框以内 */
         if(ref && ref.contains(e.target)){
            console.log(123);
         }else {
            this.showDown = false;
            document.removeEventListener('mousedown',this.clickListener,true);
         }
      },
      /* 跳转到order页面 */
      jumpToHistory (){
         this.$router.push('/order');
      }
   }
};
</script>
<style scoped lang="scss">
@import './header'
</style>