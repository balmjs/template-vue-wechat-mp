import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/not-found';
import { useStore } from 'balm-ui-store';

function createRouter(routes = []) {
  Vue.use(VueRouter);

  const routerOptions = {
    mode: 'history',
    routes: routes.concat({
      path: '*',
      component: NotFound
    })
  };

  const router = new VueRouter(routerOptions);

  router.beforeEach((to, from, next) => {
    const store = useStore();

    const routeName = to.name && to.name.split('.')[0];
    store.tabbarIndex = store.tabbarItems.findIndex(
      (item) => item.url.replace('/', '') === routeName
    );

    next();
  });

  return router;
}

export default createRouter;
