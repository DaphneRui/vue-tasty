import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VModal from 'vue-js-modal';

/* 全局style */
import './style/color.scss';
import './style/global.scss';
import './style/size.scss';

Vue.use(VModal);

Vue.config.productionTip = false;

/* 引入 vue-i18n */
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const i18n = new VueI18n({
   locale: 'zh',  // 语言标识
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
