import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $http from '@/plugins/$http';
import $bus from '@/plugins/$bus';
import $store from '@/plugins/$store';
import KboneUI from 'kbone-ui';

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

  Vue.config.productionTip = false;
  Vue.use($http);
  Vue.use($bus);
  Vue.use($store);
  Vue.use(KboneUI);

  new Vue({
    el: '#app',
    render: h => h(App),
    router
  });
}
