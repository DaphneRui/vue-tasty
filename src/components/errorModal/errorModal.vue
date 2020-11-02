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
import _ from 'lodash';

export default {
   name:'ErrorModal',
   data:function () {
      return {
         message:'',
         closeFunc: ()=>{}
      };
   },
   methods: {
      /* button控制error模态框的消失 */
      hideError (){
         this.closeFunc();
         this.$modal.hide('error');
      },
      /* 在errorModal模态框打开之前，接收传过来的错误信息，赋给当前显示的message */
      beforeOpen (e){
         this.message = e.params.message;
         /* 没有登录,跳转登录页面 */
         if(_.isFunction(e.params.func)){
            this.closeFunc = e.params.func;
         }
      },
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