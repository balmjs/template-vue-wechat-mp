import UiDemos from '@/demos/index';
import formRoutes from './form';
import baseRoutes from './base';
import viewRoutes from './view';
import feedbackRoutes from './feedback';

export default [
  {
    path: '/ui',
    name: 'ui.demos',
    component: UiDemos,
    children: [].concat(formRoutes, baseRoutes, viewRoutes, feedbackRoutes)
  }
];
