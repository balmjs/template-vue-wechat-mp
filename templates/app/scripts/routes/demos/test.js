import Home from '@/demos/pages/home';
import List from '@/demos/pages/list';
import Detail from '@/demos/pages/detail';

export default [
  {
    path: '/test/home',
    name: 'HomeTest',
    component: Home
  },
  {
    path: '/test/list/:id',
    name: 'List',
    component: List
  },
  {
    path: '/test/detail/:id',
    name: 'Detail',
    component: Detail
  }
];
