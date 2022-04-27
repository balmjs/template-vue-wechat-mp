import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $http from '@/plugins/http';
// import $bus from '@/plugins/bus';
// import $store from '@/plugins/store';
import $event from 'balm-ui/plugins/event';
import $store from 'balm-ui/plugins/store';
import myStore from '@/store';
import wxInit from '@/config/wx';
import logInit from '@/config/logger';
import getReadme from '@/config/readme';

import KboneUI from 'kbone-ui'; // UI文档 - https://wechat-miniprogram.github.io/kbone/docs/ui/intro/

export default function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  wxInit(Vue);
  logInit();

  Vue.config.productionTip = false;
  Vue.prototype.readme = getReadme();
  Vue.use($http);
  Vue.use($event);
  Vue.use($store, myStore);

  Vue.use(KboneUI);

  return new Vue({
    el: '#app',
    render: (h) => h(App),
    router
  });
}
