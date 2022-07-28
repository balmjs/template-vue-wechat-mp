import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '@/views/not-found';

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

  router.afterEach((to, from) => {
    // TODO: scroll to top
  });

  return router;
}

export default createRouter;
