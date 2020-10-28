<template>
  <div>
    <div
      class="show-modal"
      @click="openError"
    >
      点击
    </div>
    <div
      v-if="showError"
      class="container"
    >
      <h4>{{ $t('login.error.name') }}</h4>
      <div class="content">
        <button
          class="close-btn"
          @click="closeError"
        >
          {{ $t('close') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions,mapState } from 'vuex';

import './errorModal.scss';

export default {
   name:'Error',
   computed:{
      ...mapState({
         showError: state=>state.error.showError
      })
   },
   methods:{

      ...mapActions([ 'showModel','closeModal' ]),

      /* 显示 error modal */
      openError (){

         this.showModel();

      },
      /* 关闭 error modal  */
      closeError (){

         this.closeModal();
      }
   }

};
</script>

