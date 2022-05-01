import DemosLayout from '@/views/layouts/blank';
import uiDemosRoutes from './ui';
import apiDemosRoutes from './api';
import wxDemosRoutes from './wx';

export default [
  {
    path: '/main/demos',
    name: 'main.demos',
    component: DemosLayout,
    children: [].concat(uiDemosRoutes, apiDemosRoutes)
  },
  ...wxDemosRoutes
];
