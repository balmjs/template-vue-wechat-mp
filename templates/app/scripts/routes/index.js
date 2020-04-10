import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultRoutes from './default';
import demosRoutes from './demos';

Vue.use(VueRouter);

let routes = defaultRoutes.concat(demosRoutes);

const router = new VueRouter({
  routes
});

export default router;
