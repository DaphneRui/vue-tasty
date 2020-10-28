<template>
  <div class="App">
    <!-- Header组件 -->
    <!-- <Header /> -->
    <router-view />
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from './components/Loading/Loading';
// import Header from './components/Header/Header';
export default {
   name:'App',
   components: {
      // Header,
      Loading
   }
};
</script>

<style lang="scss">
// .App{
//   width : 1440px;
//   padding : 0 120px;
//   margin : auto;
// }
</style>
