import createRouter from './config';
import NotFound from '@/views/not-found';
import subRoutes from './sub';

const routes = [
  ...subRoutes,
  {
    path: '*',
    component: NotFound
  }
];

export default createRouter(routes);
