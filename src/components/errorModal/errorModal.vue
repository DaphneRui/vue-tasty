<template>
  <!-- error模态框 -->
  <modal
    name="error"
    :width="440"
    :height="120"
    @before-open="beforeOpen"
  >
    <div class="error-box">
      <div>
        {{ message }}
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
   data:function () {
      return {
         message:''
      };
   },
   methods: {
      /* button控制error模态框的消失 */
      hideError (){
         this.$modal.hide('error');
      },

      beforeOpen (e){

         this.message = e.params.message;
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