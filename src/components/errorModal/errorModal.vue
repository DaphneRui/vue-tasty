<template>
  <div>
    <button
      class="show-modal"
      @click="openModal"
    >
      点击
    </button>
    <div
      v-if="showError"
      class="container"
    >
      <h4>{{ $t('login.error.name') }}</h4>
      <div>
        <button
          class="confirm"
          @click="closeError"
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
   name:'Error',
   data (){
      return{
         showError:false
      };
   },
   methods:{
      /* error modal 的显示 */
      openModal (){

         this.showError = true;

      },
      closeError (){

         this.showError = false;
      }
   }

};
</script>

<style lang="scss">
@import './errorModal.scss'
</style>
