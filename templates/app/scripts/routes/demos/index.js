import DemosLayout from '@/views/layouts/blank';
import apiDemosRoutes from './api';
import testDemosRoutes from './test';
import wxDemosRoutes from './wx';

export default [
  {
    path: '/demos',
    name: 'demos',
    component: DemosLayout,
    children: [
      {
        path: '',
        redirect: () => {
          return { name: 'api.interaction' };
        }
      }
    ].concat(apiDemosRoutes)
  },
  ...testDemosRoutes,
  ...wxDemosRoutes
];
