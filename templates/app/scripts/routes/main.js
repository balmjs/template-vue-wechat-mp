import createRouter from './config';
import Home from '@/views/home';
import demoRoutes from './demos';
import subRoutes from './demos/sub';
import { isMP } from '@/config';

const mainRoutes = [
  {
    path: '/main/home',
    name: 'main',
    component: Home,
    alias: '/'
  },
  ...demoRoutes,
  ...(isMP ? [] : subRoutes)
];

export default createRouter(mainRoutes);
