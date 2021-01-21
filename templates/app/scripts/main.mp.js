import { createApp } from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $http from '@/plugins/http';
import $event from 'balm-ui/plugins/event';
import $store from 'balm-ui/plugins/store';
import myStore from '@/store';
import wxInit from '@/config/wx';
import logInit from '@/config/logger';

export default function createBalmApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  const app = createApp(App);

  wxInit(app);
  logInit();

  app.use(router);
  app.use($http);
  app.use($event);
  app.use($store, myStore);

  app.mount('#app');

  return app;
}
