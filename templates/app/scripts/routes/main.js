import createRouter from './config';
import Home from '@/views/home';
import NotFound from '@/views/not-found';
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