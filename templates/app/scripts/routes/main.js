import createRouter from './config';
import NotFound from '@/views/not-found';
import Home from '@/views/home';
import demoRoutes from './demos';

const routes = [
  {
    path: '/main/home',
    name: 'main',
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
