<template>
  <div>
    <button @click="handleLogin">
      login
    </button>
    <button @click="showModal">
      {{ $t('login.login') }}
    </button>
  </div>
</template>

<script>
import Modal from '../../components/Modal/Modal';
import { mapActions } from 'vuex';

export default {
   methods:{
      ...mapActions([ 'login' ]),
      /* 通过全局状态控制loading的显示 */
      handleLogin (){
         this.login();
      },
      /* vue-js-modal实现modal的显示 */
      showModal () {
         this.$modal.show(Modal, {
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

</style>
