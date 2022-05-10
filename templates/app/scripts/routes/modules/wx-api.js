import BlankLayout from '@/views/layouts/blank';
import Home from '@/views/wx-api/home';

const apiSubRoutes = [];

export default [
  {
    path: '/wx-api',
    name: 'wx-api',
    component: BlankLayout,
    redirect: { name: 'wx-api.home' },
    children: [
      {
        path: 'home',
        name: 'wx-api.home',
        component: Home
      },
      ...apiSubRoutes
    ]
  }
];
export { apiSubRoutes };
