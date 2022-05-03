import Home from '@/demos/sub-pages/home';
import List from '@/demos/sub-pages/list';
import Detail from '@/demos/sub-pages/detail';

export default [
  {
    path: '/sub/home',
    name: 'sub',
    component: Home,
    alias: '/sub'
  },
  {
    path: '/sub/list/:id',
    name: 'sub.list',
    component: List
  },
  {
    path: '/sub/detail/:id',
    name: 'sub.detail',
    component: Detail
  }
];
