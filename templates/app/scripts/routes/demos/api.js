import ApiDemos from '@/demos/kbone-api/index';
import Interaction from '@/demos/kbone-api/interaction';
import Login from '@/demos/kbone-api/login';
// import TitleBar from '@/demos/kbone-api/title-bar';
// import PullDown from '@/demos/kbone-api/pulldown';
import Request from '@/demos/kbone-api/request';
import Other from '@/demos/kbone-api/other';

export default [
  {
    path: 'api',
    name: 'main.demos.api',
    component: ApiDemos,
    children: [
      {
        path: 'interaction',
        name: 'main.demos.api.interaction',
        component: Interaction
      },
      {
        path: 'login',
        name: 'main.demos.api.login',
        component: Login
      },
      // {
      //   path: 'title-bar',
      //   name: 'main.demos.api.title-bar',
      //   component: TitleBar
      // },
      // {
      //   path: 'pulldown',
      //   name: 'main.demos.api.pulldown',
      //   component: PullDown
      // },
      {
        path: 'request',
        name: 'main.demos.api.request',
        component: Request
      },
      {
        path: 'other',
        name: 'main.demos.api.other',
        component: Other
      }
    ]
  }
];
