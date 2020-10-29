<template>
  <div>
    <!-- <div>
      <div class="titleText">
        云南过桥米线{{ categories._id }}
      </div>
      <div class="rectangle"></div>
    </div> -->
    <!-- 以下循环 -->
    <div>
      <div class="menu-food-item">
        <div class="menu-text">
          <!-- 时蔬过桥米线 -->
          <!-- {{ foods }} -->
          <br />
          <!-- {{ menuCategories[0]._id }} -->
        </div>
        <div class="menu-price">
          $7.99
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './MenuCom.scss';

export default {

   name:'MenuComponent',
   props:{
      // categories:{
      //    type:Array,
      //    required:true,
      // },
      foods:{
         type:Object,
         required:true,
      }
   },
   //  data (){
   //     return{
   //        menu:{
   //           categories:[],
   //           foods:[]
   //        }
   //     };
   //  },
   //  computed:{
   //     menuCategories (){
   //        return this.list.categories;
   //     }
   //  },
   created (){
      // this.menu.categories = this.list.categories;
      // console.log(this.list);
      // console.log(typeof(this.list));

   }

};
</script>