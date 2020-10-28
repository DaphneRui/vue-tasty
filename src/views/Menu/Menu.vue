<template>
  <div class="menu-box">
    <div class="titleText">
      邓记云南过桥米线
    </div>
    <div class="subTitleText">
      面类
    </div>
    <div class="all-category-box">
      <MenuCom></MenuCom>
    </div>
  </div>
</template>

<script>
import './Menu.scss';

/* component */
import MenuCom from '../../components/MenuCom/MenuCom';

export default {
   name:'Menu',
   components:{ MenuCom }
};
</script>
