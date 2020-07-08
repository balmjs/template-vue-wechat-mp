import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from './default';
import demosRoutes from './demos';
import { isMP } from '@/config';

Vue.use(VueRouter);

let routes = defaultRoutes.concat(demosRoutes);

const router = new VueRouter(
  isMP
    ? {
        routes
      }
    : {
        mode: 'history',
        base: '/m/', // NOTE: for Back-end
        routes
      }
);

export default router;
