<template>
  <div class="App">
    <!-- Header组件 -->
    <Header />
    <!-- error组件 -->
    <!-- <Error /> -->
    <Loading></Loading>
    <!-- 页面 -->
    <div class="main-content">
      <router-view />
    </div>
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
.main-content{
  position : relative;
  top :100px;
  // border : 1px solid #000;
}
.test{
  border : 1px solid #000;
}
</style>
