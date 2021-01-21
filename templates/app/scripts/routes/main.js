import Home from '@/views/home';
import NotFound from '@/views/not-found';
import demosRoutes from './demos';

let baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  ...demosRoutes,
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

export default baseRoutes;
