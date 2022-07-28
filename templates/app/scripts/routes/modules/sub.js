import BlankLayout from '@/views/layouts/blank';
import SubHome from '@/views/sub/home';

const subRoutes = [];

export default [
  {
    path: '/sub',
    name: 'sub',
    component: BlankLayout,
    redirect: { name: 'sub.home' },
    children: [
      {
        path: 'home',
        name: 'sub.home',
        component: SubHome
      },
      ...subRoutes
    ]
  }
];
