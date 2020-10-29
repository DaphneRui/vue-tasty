<template>
  <!-- 登录页面 -->
  <div class="login-box">
    <div class="login-container">
      <div class="input-box login-input-box">
        <div class="input-title">
          {{ $t('login.username') }}
        </div>
        <div>
          <input
            type="text"
            class="input"
          >
        </div>
      </div>
      <div class="input-box">
        <div class="input-title">
          {{ $t('login.password') }}
        </div>
        <div>
          <input
            type="password"
            class="input"
          >
        </div>
      </div>
      <div class="login-btn-box container-col vertical">
        <button
          class="normal-btn login-btn"
          @click="handleLogin"
        >
          {{ $t('login.login') }}
        </button>
        <button
          class="normal-btn sign-up-btn"
          @click="showModal"
        >
          {{ $t('login.signUp') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
   name:'Login',
   methods:{
      ...mapActions([ 'login' ]),
      /* 通过全局状态控制loading的显示 */
      handleLogin (){
         this.login();
      },
      /* vue-js-modal实现modal的显示 */
      showModal () {
         this.$modal.show('regist', {
            text: 'This text is passed as a property'
         }, {
            draggable: true,
            clickToClose: false
         });
      }
   }
};
</script>

<style>
.login-box{
  display : flex;
  align-items : center;
  justify-content : center;
  width : 100%;
  height : calc(100vh - 145px);
}
input{
   border-style : hidden;
   outline : none;
}

.login-btn-box{
   display : flex;
   flex-direction : column;
}

.login-btn, .sign-up-btn {
   width : 300px;
   margin-top : 30px;
   outline : none;
}

.sign-up-btn {
   color : #202020;
   background-color : #fff;
}

</style>
