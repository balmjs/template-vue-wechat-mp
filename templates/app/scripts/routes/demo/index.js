import DemoLayout from '@/views/layouts/blank';
import wxApisDemoRoutes from './wx-apis';
import wxComponentsDemosRoutes from './wx-components';
import weUiDemoRoutes from './weui';
import testDemoRoutes from './test';

export default [
  {
    path: '/demo',
    name: 'demo',
    component: DemoLayout,
    children: [].concat(
      wxApisDemoRoutes,
      wxComponentsDemosRoutes,
      weUiDemoRoutes
    )
  },
  ...testDemoRoutes
];
