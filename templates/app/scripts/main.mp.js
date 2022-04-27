import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $http from '@/plugins/http';
import $bus from '@/plugins/bus';
import $store from '@/plugins/store';
import myStore from '@/store';
import wxInit from '@/config/wx';
import logInit from '@/config/logger';

import { customComponents } from '@/config/components';
import KBoneUI from 'kbone-ui'; // UI文档 - https://wechat-miniprogram.github.io/kbone/docs/kbone-ui/
import * as kbone from 'kbone-tool';
import VConsole from 'vconsole';

// relations 不支持跨自定义组件，得在逻辑层解决
kbone.weui.useForm();

export default function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  wxInit(Vue);
  logInit();

  Vue.config.productionTip = false;
  Vue.use($http);
  Vue.use($bus);
  Vue.use($store, myStore);

  customComponents.forEach((Component) => {
    Vue.component(Component.name, Component);
  });

  KBoneUI.register();
  new VConsole();

  return new Vue({
    el: '#app',
    render: (h) => h(App),
    router
  });
}
