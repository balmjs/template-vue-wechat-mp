import BlankLayout from '@/views/layouts/blank';
import Home from '@/views/wx-api/home';
// 开放接口
import Login from '@/views/wx-api/open/login';
import User from '@/views/wx-api/open/user';
// 网络
import Request from '@/views/wx-api/network/request';
import Download from '@/views/wx-api/network/download';
// 媒体
import Image from '@/views/wx-api/media/image';
// 位置
import Location from '@/views/wx-api/location/location';

const openRoutes = [
  {
    path: 'login',
    name: 'wx-api.open.login',
    component: Login
  },
  {
    path: 'user',
    name: 'wx-api.open.user',
    component: User
  }
];

const networkRoutes = [
  {
    path: 'request',
    name: 'wx-api.network.request',
    component: Request
  },
  {
    path: 'download',
    name: 'wx-api.network.download',
    component: Download
  }
];

const mediaRoutes = [
  {
    path: 'image',
    name: 'wx-api.media.image',
    component: Image
  }
];

const locationRoutes = [
  {
    path: 'Location',
    name: 'wx-api.location.location',
    component: Location
  }
];

const apiSubRoutes = [
  {
    path: 'open',
    name: 'wx-api.open',
    component: BlankLayout,
    children: openRoutes
  },
  {
    path: 'network',
    name: 'wx-api.network',
    component: BlankLayout,
    children: networkRoutes
  },
  {
    path: 'media',
    name: 'wx-api.media',
    component: BlankLayout,
    children: mediaRoutes
  },
  {
    path: 'location',
    name: 'wx-api.location',
    component: BlankLayout,
    children: locationRoutes
  }
];

export default [
  {
    path: '/wx-api',
    name: 'wx-api',
    component: BlankLayout,
    redirect: { name: 'wx-api.home' },
    children: [
      {
        path: 'home',
        name: 'wx-api.home',
        component: Home
      },
      ...apiSubRoutes
    ]
  }
];
export { apiSubRoutes };
