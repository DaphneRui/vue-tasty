<template>
  <div id="app">
    <router-view />
    <button @click="showModal">
      showModal
    </button>
  </div>
</template>

<script>
import Modal from './components/Modal/Modal';
export default {
   name:'App',
   methods: {
      showModal () {
         this.$modal.show(Modal, {
            text: 'This text is passed as a property'
         }, {
            draggable: true,
            clickToClose: false
         });
      }
   },
};
</script>

<style>

</style>
