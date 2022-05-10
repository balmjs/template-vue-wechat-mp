import BlankLayout from '@/views/layouts/blank';
import Home from '@/views/wx-cloud/home';

const cloudSubRoutes = [];

export default [
  {
    path: '/wx-cloud',
    name: 'wx-cloud',
    component: BlankLayout,
    redirect: { name: 'wx-cloud.home' },
    children: [
      {
        path: 'home',
        name: 'wx-cloud.home',
        component: Home
      },
      ...cloudSubRoutes
    ]
  }
];
export { cloudSubRoutes };
