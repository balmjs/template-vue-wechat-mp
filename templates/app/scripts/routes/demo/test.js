import Home from '@/views/demo/pages/home';
import List from '@/views/demo/pages/list';
import Detail from '@/views/demo/pages/detail';

export default [
  {
    path: '/test/home',
    name: 'demo.test',
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
