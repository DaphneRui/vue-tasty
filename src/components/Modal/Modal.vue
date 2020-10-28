<template>
  <modal
    name="regist"
    :width="600"
    :height="600"
  >
    <div class="container-col vertical space-between regist-box">
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
      <div class="input-box login-input-box">
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
      <div class="input-box login-input-box">
        <div class="input-title">
          {{ $t('login.confirmPassword') }}
        </div>
        <div>
          <input
            type="password"
            class="input"
          >
        </div>
      </div>
      <div class="containerCol vertical space-between sign-up-btn-box">
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
export default {
   name:'RegistModal',
   methods:{
      showError (){
         this.$modal.show('error', {
            text: 'This text is passed as a property'
         }, {
            draggable: true,
            clickToClose: false
         });
      }
   }
};
</script>

<style type='scss'>
.regist-box{
  margin : 120px;
}
.input-box{
  margin-bottom : 30px;
}
</style>