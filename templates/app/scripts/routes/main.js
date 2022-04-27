import Home from '@/views/home';
import NotFound from '@/views/not-found';
import demoRoutes from './demo';

export default [
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
