import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $http from '@/plugins/$http';
import $bus from '@/plugins/$bus';
import $store from '@/plugins/$store';
import KboneUI from 'kbone-ui';

Vue.config.productionTip = false;
Vue.use($http);
Vue.use($bus);
Vue.use($store);
Vue.use(KboneUI);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  router
});
