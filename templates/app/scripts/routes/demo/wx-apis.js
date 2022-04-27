import ApiDemos from '@/views/demo/wx-apis/index';
import Interaction from '@/views/demo/wx-apis/interaction';
import Login from '@/views/demo/wx-apis/login';
// import TitleBar from '@/views/demo/wx-apis/title-bar';
// import PullDown from '@/views/demo/wx-apis/pulldown';
import Request from '@/views/demo/wx-apis/request';
import Other from '@/views/demo/wx-apis/other';

export default [
  {
    path: 'wx-apis',
    name: 'demo.wx-apis',
    component: ApiDemos,
    children: [
      {
        path: 'interaction',
        name: 'wx-apis.interaction',
        component: Interaction
      },
      {
        path: 'login',
        name: 'wx-apis.login',
        component: Login
      },
      // {
      //   path: 'title-bar',
      //   name: 'wx-apis.title-bar',
      //   component: TitleBar
      // },
      // {
      //   path: 'pulldown',
      //   name: 'wx-apis.pulldown',
      //   component: PullDown
      // },
      {
        path: 'request',
        name: 'wx-apis.request',
        component: Request
      },
      {
        path: 'other',
        name: 'wx-apis.other',
        component: Other
      }
    ]
  }
];
