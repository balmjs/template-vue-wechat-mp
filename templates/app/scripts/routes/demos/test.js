import Home from '@/demos/pages/home';
import List from '@/demos/pages/list';
import Detail from '@/demos/pages/detail';

export default [
  {
    path: '/test/home',
    name: 'demos.test',
    component: Home
  },
  {
    path: '/test/list/:id',
    name: 'test.list',
    component: List
  },
  {
    path: '/test/detail/:id',
    name: 'test.detail',
    component: Detail
  }
];
