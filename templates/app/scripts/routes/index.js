import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from './default';
import demosRoutes from './demos';
import { isMP } from '@/config';

Vue.use(VueRouter);

let routes = defaultRoutes.concat(demosRoutes);

let routerOptions = {
  mode: 'history',
  routes
};

// if (!isMP) {
//   routerOptions.base = '/m/'; // NOTE: for Back-end
// }

const router = new VueRouter(routerOptions);

export default router;
