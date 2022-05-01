import Vue from 'vue';
import $http from '@/plugins/http';
import $event from 'balm-ui/plugins/event';
import $store from 'balm-ui/plugins/store';
import myStore from '@/store';
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
  Vue.use($http);
  Vue.use($event);
  Vue.use($store, myStore);

  Vue.use(KboneUI);

  fn(Vue);

  return new Vue({
    el: '#app',
    render: (h) => h(App),
    router
  });
}

export default createApp;
