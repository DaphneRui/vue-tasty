import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
/* vue-js-modal */
import VModal from 'vue-js-modal'

Vue.config.productionTip = false;
/* 引入 vue-i18n */
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const i18n = new VueI18n({
   locale: 'en',  // 语言标识
   messages: {
      'zh': require('./common/i18n/zh-CN.json'),
      'en': require('./common/i18n/en-US.json')
   }
});

new Vue({
   router,
   store,
   i18n,
   render: h => h(App)
}).$mount('#app');
