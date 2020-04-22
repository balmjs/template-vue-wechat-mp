import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $http from '@/plugins/$http';
import $bus from '@/plugins/$bus';
import $store from '@/plugins/$store';
import { isMP } from '@/config';

import KboneUI from 'kbone-ui'; // UI文档 - https://wechat-miniprogram.github.io/kbone/docs/ui/intro/
import KboneAPI from 'kbone-api'; // 小程序API文档 - https://developers.weixin.qq.com/miniprogram/dev/api/

function refreshRem() {
  let clientWidth = KboneAPI.getSystemInfoSync().screenWidth;
  if (clientWidth > 540) {
    clientWidth = 540;
  }
  const rootFontSize = `${clientWidth / 10}px`;
  document.documentElement.style.fontSize = rootFontSize;
}

export default function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  window.onerror = (message, source, lineno, colno, error) => {
    console.log('window.onerror => ', message, source, lineno, colno, error);
  };
  window.addEventListener('error', evt =>
    console.log("window.addEventListener('error') =>", evt)
  );

  if (isMP) {
    window.onload = refreshRem;

    window.addEventListener('wxshow', refreshRem);

    KboneAPI.onWindowResize(() => {
      KboneAPI.nextTick(() => {
        refreshRem();
      });
    });
  }

  Vue.prototype.isMP = isMP;

  Vue.config.productionTip = false;
  Vue.use($http);
  Vue.use($bus);
  Vue.use($store);

  Vue.use(KboneUI);
  Vue.use(KboneAPI);

  new Vue({
    el: '#app',
    render: h => h(App),
    router
  });
}
