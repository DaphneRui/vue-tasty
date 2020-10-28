<template>
  <div class="App">
    <!-- Header组件 -->
    <Header />
    <!-- error组件 -->
    <Error />
    <router-view />
  </div>
</template>

<script>

/* components */
import Header from './components/Header/Header';
import Error from './components/errorModal/errorModal';
export default {
   name: 'App',
   components: {
      Header,
      Error
   }
};
</script>

<style lang="scss">
.App{
  width : 1440px;
  padding : 0 120px;
  margin : auto;
}
</style>
