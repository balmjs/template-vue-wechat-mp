import createRouter from './config';
import NotFound from '@/views/not-found';
import Home from '@/demos/sub-pages/home';
import subRoutes from './demos/sub';

const routes = [
  {
    path: '/sub/home',
    name: 'sub',
    component: Home,
    alias: '/'
  },
  ...subRoutes,
  {
    path: '*',
    component: NotFound
  }
];

export default createRouter(routes);
