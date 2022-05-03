import Vue from 'vue';
// import $openApi from '@/plugins/open-api';
import $http from '@/plugins/http';
import $event from 'balm-ui-event';
import $store from 'balm-ui-store';
import myStore from '@/store';
// import $globalStore from '@/plugins/global-store';
// import myGlobalStore from '@/store/global';
import wxInit from '@/config/wx';
import logInit from '@/config/logger';

import KboneUI from 'kbone-ui'; // UI文档 - https://wechat-miniprogram.github.io/kbone/docs/ui/intro/

function createApp(App, router = {}, fn = () => {}) {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  wxInit(Vue);
  logInit();

  Vue.config.productionTip = false;
  // Vue.use($openApi);
  Vue.use($http);
  Vue.use($event);
  Vue.use($store, myStore);
  // Vue.use($globalStore, myGlobalStore); // TODO: 未实现

  Vue.use(KboneUI);

  fn(Vue);

  return new Vue({
    el: '#app',
    render: (h) => h(App),
    router
  });
}

export default createApp;
