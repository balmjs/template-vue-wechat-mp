import DemosLayout from '@/demos/index';
import ApiDemos from '@/demos/wx';
import UiDemos from '@/demos/ui';
import formRoutes from './form';
import baseRoutes from './base';
import viewRoutes from './view';
import feedbackRoutes from './feedback';

export default [
  {
    path: '/demos',
    name: 'demos',
    component: DemosLayout,
    children: [
      {
        path: 'ui',
        name: 'demos.ui',
        component: UiDemos,
        children: [].concat(formRoutes, baseRoutes, viewRoutes, feedbackRoutes)
      },
      {
        path: 'api',
        name: 'demos.api',
        component: ApiDemos
      }
    ]
  }
];
