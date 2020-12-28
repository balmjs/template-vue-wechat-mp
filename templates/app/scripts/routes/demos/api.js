import ApiDemos from '@/demos/kbone-api/index';
import Interaction from '@/demos/kbone-api/interaction';
import Login from '@/demos/kbone-api/login';
// import TitleBar from '@/demos/kbone-api/title-bar';
import PullDown from '@/demos/kbone-api/pulldown';
import Request from '@/demos/kbone-api/request';
import Other from '@/demos/kbone-api/other';

export default [
  {
    path: 'api',
    name: 'demos.api',
    component: ApiDemos,
    children: [
      {
        path: 'interaction',
        name: 'api.interaction',
        component: Interaction
      },
      {
        path: 'login',
        name: 'api.login',
        component: Login
      },
      // {
      //   path: 'title-bar',
      //   name: 'api.title-bar',
      //   component: TitleBar
      // },
      {
        path: 'pulldown',
        name: 'api.pulldown',
        component: PullDown
      },
      {
        path: 'request',
        name: 'api.request',
        component: Request
      },
      {
        path: 'other',
        name: 'api.other',
        component: Other
      }
    ]
  }
];
