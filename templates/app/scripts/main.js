import 'lib-flexible';
import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $http from '@/plugins/$http';
import $bus from '@/plugins/$bus';
import $store from '@/plugins/$store';

import KboneUI from 'kbone-ui'; // UI文档 - https://wechat-miniprogram.github.io/kbone/docs/ui/intro/
import KboneAPI from 'kbone-api'; // 小程序API文档 - https://developers.weixin.qq.com/miniprogram/dev/api/

Vue.config.productionTip = false;
Vue.use($http);
Vue.use($bus);
Vue.use($store);

Vue.use(KboneUI);
Vue.use(KboneAPI);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  router
});
