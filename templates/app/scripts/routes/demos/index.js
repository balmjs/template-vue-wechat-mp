import DemosLayout from '@/views/layouts/blank';
import uiDemosRoutes from './ui';
import apiDemosRoutes from './api';
import testDemosRoutes from './test';
import wxDemosRoutes from './wx';

export default [
  {
    path: '/demos',
    name: 'demos',
    component: DemosLayout,
    children: [].concat(uiDemosRoutes, apiDemosRoutes)
  },
  ...testDemosRoutes,
  ...wxDemosRoutes
];
