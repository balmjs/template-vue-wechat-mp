import Vue from 'vue';
import $wxApi from '@/plugins/wx-api';
// import $openApi from '@/plugins/open-api';
import $http from '@/plugins/http';
import $event from 'balm-ui-event';
import $store from 'balm-ui-store';
import myStore from '@/store';
// import $globalStore from '@/plugins/global-store';
// import myGlobalStore from '@/store/global';
import logInit from '@/config/logger';
import { customComponents, mpComponents } from '@/config/components';
import { isMP } from '@/config';

function createApp(App, router = {}, KBoneUI = false, fn = () => {}) {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  logInit();

  Vue.config.productionTip = false;
  Vue.prototype.isMP = isMP;
  Vue.use($wxApi);
  // Vue.use($openApi);
  Vue.use($http);
  Vue.use($event);
  Vue.use($store, myStore);
  // Vue.use($globalStore, myGlobalStore); // TODO: 未实现

  customComponents.forEach((customComponent) =>
    Vue.component(customComponent.name, customComponent)
  );
  mpComponents.forEach((mpComponent) =>
    Vue.component(mpComponent.name, mpComponent)
  );

  fn(Vue);

  // UI文档 - https://wechat-miniprogram.github.io/kbone/docs/kbone-ui
  KBoneUI && KBoneUI.register();

  return new Vue({
    el: '#app',
    render: (h) => h(App),
    router
  });
}

export default createApp;
