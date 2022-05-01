import Vue from 'vue';
import VueRouter from 'vue-router';
import { isMP } from '@/config';

function createRouter(routes) {
  Vue.use(VueRouter);

  const routerOptions = {
    mode: 'history',
    routes
  };

  // if (!isMP) {
  //   routerOptions.base = '/m/'; // NOTE: for Back-end
  // }

  const router = new VueRouter(routerOptions);
}

export default createRouter;
