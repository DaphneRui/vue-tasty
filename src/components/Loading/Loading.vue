<template>
  <div
    v-if="showLoading"
    class="loading-container"
  >
    <img
      src="@/assets/loading.gif"
      alt="loading"
      class="loading-image"
    >
  </div>
</template>

<script>
import './loading.scss';
import { mapState } from 'vuex';
export default {
   name:'Loading',
   computed: {
      ...mapState({
         showLoading: state=>state.loading.showLoading
      })
   },
};
</script>
