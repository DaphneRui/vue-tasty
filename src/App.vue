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
import Error from './components/ErrorModal/errorModal';
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
// background-color : #f7f7f7;
}
.main-content{
<<<<<<< HEAD
=======
  // display : flex;
  // align-items : center;
  // justify-content : center;
  // width : 100%;
  // height : calc(100vh - 45px);
>>>>>>> f4ed0fa4ee89ed44590f436abe042a5ba603e25b
  position : relative;
  top : 100px;
}
.test{
  border : 1px solid #000;
}
</style>
