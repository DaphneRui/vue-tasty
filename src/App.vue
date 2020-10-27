<template>
  <div class="App">
    <!-- Header组件 -->
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header/Header';
export default {
   name: 'App',
   components: {
      Header
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
