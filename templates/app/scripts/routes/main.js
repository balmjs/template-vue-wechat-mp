import createRouter from './config';
import NotFound from '@/views/not-found';
import Home from '@/views/home';
import demoRoutes from './demos';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: '/'
  },
  ...demoRoutes,
  {
    path: '*',
    component: NotFound
  }
];

export default createRouter(routes);
