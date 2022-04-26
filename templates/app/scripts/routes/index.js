import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './main';
import { isMP } from '@/config';

Vue.use(VueRouter);

let routerOptions = {
  mode: 'history',
  routes
};

// if (!isMP) {
//   routerOptions.base = '/m/'; // NOTE: for Back-end
// }

const router = new VueRouter(routerOptions);

export default router;
