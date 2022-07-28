import createRouter from './create-router';
import Home from '@/views/main/home';
import { isMP } from '@/config';
import subRoutes from './modules';

const mainRoutes = [
  {
    path: '/main',
    name: 'main',
    component: Home,
    alias: '/'
  },
  ...(isMP ? [] : subRoutes)
];

export default createRouter(mainRoutes);
