<template>
  <div>
    <button
      class="show-modal"
      @click="openError"
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
      /* error modal 的显示 */
      openError (){

         console.log(this);
         this.showModel();

      },
      closeError (){

         this.closeModal();
      }
   }

};
</script>

