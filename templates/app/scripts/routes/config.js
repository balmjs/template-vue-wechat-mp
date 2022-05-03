import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/not-found';
import { isMP } from '@/config';

function createRouter(routes) {
  Vue.use(VueRouter);

  const routerOptions = {
    mode: 'history',
    routes: routes.concat({
      path: '*',
      component: NotFound
    })
  };

  // if (!isMP) {
  //   routerOptions.base = '/m/'; // NOTE: for Back-end
  // }

  return new VueRouter(routerOptions);
}

export default createRouter;
