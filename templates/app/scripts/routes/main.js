import createRouter from './config';
import Home from '@/views/home';
import demoRoutes from './demos';
import { isMP } from '@/config';
import subRoutes from './demos/sub';

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
