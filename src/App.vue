<template>
  <div class="App">
    <!-- Header组件 -->
    <Header />
    <!-- modal组件 -->
    <RegistModal></RegistModal>
    <!-- error组件 -->
    <Error />
    <!-- loading组件 -->
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
import RegistModal from './components/RegistModal/RegistModal';
import Header from './components/Header/Header';
import Error from './components/ErrorModal/ErrorModal';
export default {
   name:'App',
   components: {
      Loading,
      Header,
      Error,
      RegistModal
   }
};
</script>

<style lang="scss">
*{
   padding : 0;
   margin : 0;
}
.App{
  width : 1440px;
  padding : 0 120px;
  margin : auto;
  background-color : #f7f7f7;
}
.main-content{
  position : relative;
  top : 100px;
  // display : flex;
  // width : 100%;
}
.test{
  border : 1px solid #000;
}
// .test{
//   border : 1px solid #000;
// }
</style>
