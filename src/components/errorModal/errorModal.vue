<template>
  <!-- error模态框 -->
  <modal
    name="error"
    :width="440"
    :height="120"
  >
    <div class="error-box">
      <div>
        <!-- {{ $t('login.error.name') }} -->
      </div>
      <div class="container-col vertical space-between error-btn-box">
        <button
          class="normal-btn"
          @click="hideError"
        >
          {{ $t('close') }}
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
   name:'ErrorModal',
   methods: {
      /* button控制error模态框的消失 */
      hideError (){
         this.$modal.hide('error');
      }
   },
};
</script>

<style type='scss'>
.error-box{
  padding : 20px;
}
.error-btn-box{
  margin-top : 10px;
}
.normal-btn{
  outline : none;
}
</style>