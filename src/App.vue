<template>
  <div class="App">
    <!-- Header组件 -->
    <Header />
    <!-- modal组件 -->
    <Modal></Modal>
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
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Error from './components/errorModal/errorModal';
export default {
   name:'App',
   components: {
      Loading,
      Header,
      Error,
      Modal
   }
};
</script>

<style lang="scss">
*{
   padding : 0;
   margin : 0;
}
.App{
//   width : 1440px;
  padding : 0 120px;
  margin : auto;
// background-color : #f7f7f7;
}
.main-content{
  position : relative;
  top : 100px;
  display : flex;
  width : 100%;
}
// .test{
//   border : 1px solid #000;
// }
</style>
