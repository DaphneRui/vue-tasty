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
            v-model="username"
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
            v-model="password"
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
            v-model="checkPass"
            type="password"
            class="input"
          >
        </div>
      </div>
      <div class="container-col vertical space-between sign-up-btn-box">
        <button
          class="normal-btn login-btn"
          @click="handleRegist"
        >
          {{ $t('login.signUp') }}
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex';
import { checkName,checkPassword } from '../../common/utils';

export default {
   name:'RegistModal',
   data () {
      return {
         username:'',
         password:'',
         checkPass:'',
      };
   },
   methods:{
      ...mapActions([ 'regist' ]),
      /* 通过vue-js-modal显示error框的显示 */
      handleRegist (){
         /* 用户名正则验证不正确，跳出相应的错误框，将message传给errorModal里的message */
         if(!checkName(this.username)){
            this.$modal.show('error',{ message:this.$t('login.error.name') });
         }
         /* 密码正则验证不正确 */
         if(!checkPassword(this.password)){
            this.$modal.show('error',{ message:this.$t('login.error.password') });
            this.password = '';
            this.checkPass = '';
         }
         /* 密码和确认密码不一致 */
         if(this.checkPass != this.password){
            console.log('======>in');
            this.$modal.show('error',{ message:this.$t('login.error.comfirmPassword') });
            this.checkPass = '';
         }
         if(checkName(this.username) && checkPassword(this.password) && this.checkPass === this.password){

            this.regist({ username:this.username,password:this.password });
            /* 点击注册之后隐藏注册模态框并清空输入内容 */
            this.$modal.hide('regist');
            this.username = '';
            this.password = '';
            this.checkPass = '';
         }
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