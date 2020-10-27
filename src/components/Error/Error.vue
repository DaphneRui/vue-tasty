<template>
  <div class="error-box">
    this is error
    <button @click="$emit('close')">
      close
    </button>
  </div>
</template>

<script>
import './error.scss';
export default {
   name:'Error',

};
</script>