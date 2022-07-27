import BlankLayout from '@/views/layouts/blank';
import Home from '@/views/wx-component/home';
// 视图容器
import View from '@/views/wx-component/view/view';
import ScrollView from '@/views/wx-component/view/scroll-view';
import Swiper from '@/views/wx-component/view/swiper';
import MovableView from '@/views/wx-component/view/movable-view';
import CoverView from '@/views/wx-component/view/cover-view';
// 基础内容
import Text from '@/views/wx-component/basic/text';
import Icon from '@/views/wx-component/basic/icon';
import Progress from '@/views/wx-component/basic/progress';
import RichText from '@/views/wx-component/basic/rich-text';
// 表单组件
import Button from '@/views/wx-component/form/button';
import Checkbox from '@/views/wx-component/form/checkbox';
import Form from '@/views/wx-component/form/form';
import Input from '@/views/wx-component/form/input';
import Label from '@/views/wx-component/form/label';
import Picker from '@/views/wx-component/form/picker';
import Radio from '@/views/wx-component/form/radio';
import PickerView from '@/views/wx-component/form/picker-view';
import Slider from '@/views/wx-component/form/slider';
import Switch from '@/views/wx-component/form/switch';
import Textarea from '@/views/wx-component/form/textarea';
// import Editor from '@/views/wx-component/form/editor';
// 导航
// 媒体组件
// 地图
// 画布
// 开放能力
// 无障碍访问
import { isMP } from '@/config';

const viewRoutes = [
  {
    path: 'view',
    name: 'wx-component.view.view',
    component: View
  },
  {
    path: 'scroll-view',
    name: 'wx-component.view.scroll-view',
    component: ScrollView
  },
  {
    path: 'swiper',
    name: 'wx-component.view.swiper',
    component: Swiper
  },
  {
    path: 'movable-view',
    name: 'wx-component.view.movable-view',
    component: MovableView
  },
  {
    path: 'cover-view',
    name: 'wx-component.view.cover-view',
    component: CoverView
  }
];

const basicRoutes = [
  {
    path: 'text',
    name: 'wx-component.basic.text',
    component: Text
  },
  {
    path: 'icon',
    name: 'wx-component.basic.icon',
    component: Icon
  },
  {
    path: 'progress',
    name: 'wx-component.basic.progress',
    component: Progress
  },
  {
    path: 'rich-text',
    name: 'wx-component.basic.rich-text',
    component: RichText
  }
];

const formRoutes = [
  {
    path: 'button',
    name: 'wx-component.form.button',
    component: Button
  },
  {
    path: 'checkbox',
    name: 'wx-component.form.checkbox',
    component: Checkbox
  },
  {
    path: 'form',
    name: 'wx-component.form.form',
    component: Form
  },
  {
    path: 'input',
    name: 'wx-component.form.input',
    component: Input
  },
  {
    path: 'label',
    name: 'wx-component.form.label',
    component: Label
  },
  {
    path: 'picker',
    name: 'wx-component.form.picker',
    component: Picker
  },
  {
    path: 'picker-view',
    name: 'wx-component.form.picker-view',
    component: PickerView
  },
  {
    path: 'radio',
    name: 'wx-component.form.radio',
    component: Radio
  },
  {
    path: 'slider',
    name: 'wx-component.form.slider',
    component: Slider
  },
  {
    path: 'switch',
    name: 'wx-component.form.switch',
    component: Switch
  },
  {
    path: 'textarea',
    name: 'wx-component.form.textarea',
    component: Textarea
  }
  // ...(isMP
  //   ? [
  //       {
  //         path: 'editor',
  //         name: 'wx-component.form.editor',
  //         component: Editor
  //       }
  //     ]
  //   : [])
];

const wxSubRoutes = [
  {
    path: 'view',
    name: 'wx-component.view',
    component: BlankLayout,
    children: viewRoutes
  },
  {
    path: 'basic',
    name: 'wx-component.basic',
    component: BlankLayout,
    children: basicRoutes
  },
  {
    path: 'form',
    name: 'wx-component.form',
    component: BlankLayout,
    children: formRoutes
  },
  {
    path: 'navigation',
    name: 'wx-component.navigation',
    component: BlankLayout,
    children: []
  },
  {
    path: 'media',
    name: 'wx-component.media',
    component: BlankLayout,
    children: []
  },
  {
    path: 'map',
    name: 'wx-component.map',
    component: BlankLayout,
    children: []
  },
  {
    path: 'canvas',
    name: 'wx-component.canvas',
    component: BlankLayout,
    children: []
  },
  {
    path: 'open',
    name: 'wx-component.open',
    component: BlankLayout,
    children: []
  },
  {
    path: 'a11y',
    name: 'wx-component.a11y',
    component: BlankLayout,
    children: []
  }
];

export default [
  {
    path: '/wx-component',
    name: 'wx-component',
    component: BlankLayout,
    redirect: { name: 'wx-component.home' },
    children: [
      {
        path: 'home',
        name: 'wx-component.home',
        component: Home
      },
      ...wxSubRoutes
    ]
  }
];
export { wxSubRoutes };
