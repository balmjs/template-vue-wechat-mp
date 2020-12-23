import DemosLayout from '@/demos/kbone/index';
import ApiDemos from '@/demos/kbone/wx';
import UiDemos from '@/demos/kbone/ui';
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
