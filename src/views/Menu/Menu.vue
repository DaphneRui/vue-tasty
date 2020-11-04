<template>
  <div class="menu-box">
    <!-- 餐馆名字 -->
    <div class="titleText">
      {{ name }}
    </div>

    <!-- 餐馆分类 -->
    <div class="subTitleTexts">
      <div
        v-for="subTitle in subTitleText "
        :key="subTitle.id"
        class="subTitleText"
      >
        {{ subTitle.tag }}
      </div>
    </div>

    <div class="all-category-box">
      <!-- 没有菜品 -->
      <div v-if="renderFoods.length === 0 ">
        {{ $t('menu.no-menu') }}
      </div>
      <!-- 渲染菜品 -->
      <MenuItem
        v-for="item in renderFoods"
        :key="item.categories._id"
        :foods="item.foods"
        :categories="item.categories"
      />
    </div>
    <div class="menu-cart">
      <div class="menu-cart-container">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import './Menu.scss';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { checkRestaurantClosed } from '@/common/utils.js';
import { setStorage,getStorage } from '@/common/utils.js';
import * as types from '@/store/mutation-type';
import { mapActions,mapState } from 'vuex';
import MenuItem from '@/components/MenuCom/MenuCom';
import Cart from '@/components/Cart/Cart';
import { i18n } from '@/main';

export default {
   name:'Menu',
   components:{
      MenuItem,
      Cart
   },
   computed:{
      ...mapState({
         /* 控制中英文 */
         'lang': state => state.language.lang,

         /* 种类 */
         'categories':state=>state.menu.menuList.categories,

         /* 菜单详情 */
         'foods':state=>state.menu.menuList.foods,
      }),

      /* 餐馆名字 */
      name (){
         /* 餐馆名字 根据语言变化 */
         const name = getStorage('restaurant').name;
         return name[`${this.lang}`];
      },

      /* 餐馆分类 */
      subTitleText (){
         let subTitle = [];
         /* 遍历tags 根据语言变化 */
         _.forEach(getStorage('restaurant').tags,(item)=>{
            subTitle.push({
               tag: this.$t(`tags.${item}`),
               id: uuidv4()
            });
         });
         return subTitle;
      },

      /* 重构数据 */
      renderFoods (){
         const menuList = [];

         _.forEach(this.categories,(item)=>{
            /* 找到每一个category中对应的所有foods */
            const categoryId = _.get(item,'_id');
            const foodList = _.filter(this.foods, { category: { _id: categoryId } });
            menuList.push({
               foods: _.orderBy(foodList, [ 'available' ], [ 'desc' ]),
               categories: item
            });

         });
         return menuList;
      },

   },

   created (){
      /* 根据餐馆名获取 menu */
      this.getMenu({ restaurantId:this.$route.params.id });

      /* 进入新餐馆，删除购物车 */
      const cartId = getStorage('cartId');
      if(cartId !== this.$route.params.id){
         setStorage('cart',[]);
         this.$store.commit(types.CLEAR_CART);
      }
   },
   mounted () {
      /* 检测店铺是否关闭 */
      if(this.timer){
         clearInterval(this.timer);
      }else{
         this.timer = setInterval(()=>{
            if(checkRestaurantClosed(getStorage('restaurant')) === false){
               this.$modal.show('error',{ message:i18n.t('menu.closed') });
            }
         }, 30000);
      }

   },
   beforeDestroy () {
      clearInterval(this.timer);
   },

   methods:{
      ...mapActions([ 'getMenu' ]),
   }
};
</script>
