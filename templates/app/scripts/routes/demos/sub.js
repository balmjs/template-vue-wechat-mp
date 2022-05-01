import List from '@/demos/sub-pages/list';
import Detail from '@/demos/sub-pages/detail';

export default [
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
