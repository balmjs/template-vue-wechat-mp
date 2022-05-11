import BlankLayout from '@/views/layouts/blank';
import Home from '@/views/mp-component/home';
// 表单
import Cell from '@/views/mp-component/form/cell';
import Slideview from '@/views/mp-component/form/slideview';
import Form from '@/views/mp-component/form/form';
import Uploader from '@/views/mp-component/form/uploader';
// 基础组件
import Article from '@/views/mp-component/basic/article';
import Icons from '@/views/mp-component/basic/icons';
import Badge from '@/views/mp-component/basic/badge';
import Flex from '@/views/mp-component/basic/flex';
import Footer from '@/views/mp-component/basic/footer';
import Gallery from '@/views/mp-component/basic/gallery';
import Grid from '@/views/mp-component/basic/grid';
import Loading from '@/views/mp-component/basic/loading';
// 操作反馈
import Dialog from '@/views/mp-component/feedback/dialog';
import Msg from '@/views/mp-component/feedback/msg';
import HalfScreenDialog from '@/views/mp-component/feedback/half-screen-dialog';
import Actionsheet from '@/views/mp-component/feedback/actionsheet';
import Toptips from '@/views/mp-component/feedback/toptips';
// 导航相关
import NavigationBar from '@/views/mp-component/navigation/navigation-bar';
import Tabbar from '@/views/mp-component/navigation/tabbar';
// 搜索相关
import Searchbar from '@/views/mp-component/search/searchbar';
// 扩展组件
import { isMP } from '@/config';

const formRoutes = [
  {
    path: 'cell',
    name: 'mp-component.form.cell',
    component: Cell
  },
  {
    path: 'slideview',
    name: 'mp-component.form.slideview',
    component: Slideview
  },
  {
    path: 'form',
    name: 'mp-component.form.form',
    component: Form
  },
  {
    path: 'uploader',
    name: 'mp-component.form.uploader',
    component: Uploader
  }
];

const basicRoutes = [
  {
    path: 'article',
    name: 'mp-component.basic.article',
    component: Article
  },
  {
    path: 'icons',
    name: 'mp-component.basic.icons',
    component: Icons
  },
  {
    path: 'badge',
    name: 'mp-component.basic.badge',
    component: Badge
  },
  {
    path: 'flex',
    name: 'mp-component.basic.flex',
    component: Flex
  },
  {
    path: 'footer',
    name: 'mp-component.basic.footer',
    component: Footer
  },
  {
    path: 'gallery',
    name: 'mp-component.basic.gallery',
    component: Gallery
  },
  {
    path: 'grid',
    name: 'mp-component.basic.grid',
    component: Grid
  },
  {
    path: 'loading',
    name: 'mp-component.basic.loading',
    component: Loading
  }
];

const feedbackRoutes = [
  {
    path: 'dialog',
    name: 'mp-component.feedback.dialog',
    component: Dialog
  },
  {
    path: 'msg',
    name: 'mp-component.feedback.msg',
    component: Msg
  },
  {
    path: 'half-screen-dialog',
    name: 'mp-component.feedback.half-screen-dialog',
    component: HalfScreenDialog
  },
  {
    path: 'actionsheet',
    name: 'mp-component.feedback.actionsheet',
    component: Actionsheet
  },
  {
    path: 'toptips',
    name: 'mp-component.feedback.toptips',
    component: Toptips
  }
];

const navigationRoutes = [
  {
    path: 'navigation-bar',
    name: 'mp-component.navigation.navigation-bar',
    component: NavigationBar
  },
  {
    path: 'tabbar',
    name: 'mp-component.navigation.tabbar',
    component: Tabbar
  }
];

const searchRoutes = [
  {
    path: 'searchbar',
    name: 'mp-component.search.searchbar',
    component: Searchbar
  }
];

const mpSubRoutes = [
  {
    path: 'form',
    name: 'mp-component.form',
    component: BlankLayout,
    children: formRoutes
  },
  {
    path: 'basic',
    name: 'mp-component.basic',
    component: BlankLayout,
    children: basicRoutes
  },
  {
    path: 'feedback',
    name: 'mp-component.feedback',
    component: BlankLayout,
    children: feedbackRoutes
  },
  {
    path: 'navigation',
    name: 'mp-component.navigation',
    component: BlankLayout,
    children: navigationRoutes
  },
  {
    path: 'search',
    name: 'mp-component.search',
    component: BlankLayout,
    children: searchRoutes
  },
  ...(isMP
    ? [
        {
          path: 'extended',
          name: 'mp-component.extended',
          component: BlankLayout,
          children: []
        }
      ]
    : [])
];

export default [
  {
    path: '/mp-component',
    name: 'mp-component',
    component: BlankLayout,
    redirect: { name: 'mp-component.home' },
    children: [
      {
        path: 'home',
        name: 'mp-component.home',
        component: Home
      },
      ...mpSubRoutes
    ]
  }
];
export { mpSubRoutes };
