<template>
  <!-- 注册模态框 -->
  <modal
    name="regist"
    :width="600"
    :height="600"
  >
    <div class="container-col vertical space-between regist-box">
      <div class="input-box sign-up-input-box">
        <div class="input-title">
          {{ $t('login.username') }}
        </div>
        <div>
          <input
            v-model="regUsername"
            type="text"
            class="input"
          >
        </div>
      </div>
      <div class="input-box sign-up-input-box">
        <div class="input-title">
          {{ $t('login.password') }}
        </div>
        <div>
          <input
            v-model="regPassword"
            type="password"
            class="input"
          >
        </div>
      </div>
      <div class="input-box sign-up-input-box">
        <div class="input-title">
          {{ $t('login.confirmPassword') }}
        </div>
        <div>
          <input
            v-model="checkPassword"
            type="password"
            class="input"
          >
        </div>
      </div>
      <div class="container-col vertical space-between sign-up-btn-box">
        <button
          class="normal-btn login-btn"
          @click="showError"
        >
          {{ $t('login.signUp') }}
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex';
export default {
   name:'RegistModal',
   data () {
      return {
         regUsername:'',
         regPassword:'',
         checkPassword:'',
      };
   },
   methods:{
      ...mapActions([ 'regist' ]),
      /* 通过vue-js-modal显示error框的显示 */
      showError (){
         this.regist({ regUsername:this.regUsername,regPassword:this.regPassword,checkPassword:this.checkPassword });
      }
   }
};
</script>

<style type='scss'>
.regist-box{
  height : 200px;
  margin : 100px 0;
}
.sign-up-input-box{
  margin-top : 50px;
}
.sign-up-btn-box{
  margin-top : 50px;
}
</style>