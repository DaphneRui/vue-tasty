<template>
  <div class="App">
    <!-- Header组件 -->
    <Header />
    <!-- error组件 -->
    <!-- <Error /> -->
    <router-view />
    <Loading></Loading>
  </div>
</template>

<script>
/* components */
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
// import Error from './components/errorModal/errorModal';
export default {
   name:'App',
   components: {
      Loading,
      Header,
      // Error
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
