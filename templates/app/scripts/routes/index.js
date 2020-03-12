import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from './default';
import uiDemosRoutes from './ui';

Vue.use(VueRouter);

let routes = defaultRoutes.concat(uiDemosRoutes);

const router = new VueRouter({
  routes
});

export default router;
