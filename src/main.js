import Vue from 'vue';
/* 引入 vue-i18n */
import VueI18n from 'vue-i18n';
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

Vue.use(VueI18n);

export const i18n = new VueI18n({
   locale: JSON.parse(localStorage.getItem('language')) || 'zh-CN',
   messages: {
      'zh-CN': require('./common/i18n/zh-CN.json'),
      'en-US': require('./common/i18n/en-US.json')
   },

});

new Vue({
   store,
   router,
   i18n,
   render: h => h(App)
}).$mount('#app');
