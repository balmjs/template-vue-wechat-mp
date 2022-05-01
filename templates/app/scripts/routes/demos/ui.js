import UiDemos from '@/demos/kbone-ui/index';
import BlankLayout from '@/views/layouts/blank';
// 表单
import Button from '@/demos/kbone-ui/button';
import Form from '@/demos/kbone-ui/form';
import FormPage from '@/demos/kbone-ui/form-page';
import FormInputStatus from '@/demos/kbone-ui/form-input-status';
import FormVcode from '@/demos/kbone-ui/form-vcode';
import FormCheckbox from '@/demos/kbone-ui/form-checkbox';
import FormRadio from '@/demos/kbone-ui/form-radio';
import FormSwitch from '@/demos/kbone-ui/form-switch';
import FormSelect from '@/demos/kbone-ui/form-select';
import FormTextarea from '@/demos/kbone-ui/form-textarea';
import Cells from '@/demos/kbone-ui/cells';
import Slider from '@/demos/kbone-ui/slider';
// 基础组件
import Flex from '@/demos/kbone-ui/flex';
import Icon from '@/demos/kbone-ui/icon';
import Progress from '@/demos/kbone-ui/progress';
// 视图组件
import Swiper from '@/demos/kbone-ui/swiper';
import ScrollView from '@/demos/kbone-ui/scroll-view';
import Movable from '@/demos/kbone-ui/movable';
// 操作反馈
import ActionSheet from '@/demos/kbone-ui/action-sheet';
import Dialog from '@/demos/kbone-ui/dialog';
import Picker from '@/demos/kbone-ui/picker';
import Toast from '@/demos/kbone-ui/toast';
import Toptips from '@/demos/kbone-ui/toptips';

const formRoutes = [
  {
    path: 'form-page',
    name: 'main.demos.ui.form-page',
    component: FormPage
  },
  {
    path: 'form-input-status',
    name: 'main.demos.ui.form-input-status',
    component: FormInputStatus
  },
  {
    path: 'form-vcode',
    name: 'main.demos.ui.form-vcode',
    component: FormVcode
  },
  {
    path: 'form-checkbox',
    name: 'main.demos.ui.form-checkbox',
    component: FormCheckbox
  },
  {
    path: 'form-radio',
    name: 'main.demos.ui.form-radio',
    component: FormRadio
  },
  {
    path: 'form-switch',
    name: 'main.demos.ui.form.switch',
    component: FormSwitch
  },
  {
    path: 'form-select',
    name: 'main.demos.ui.form-select',
    component: FormSelect
  },
  {
    path: 'form-textarea',
    name: 'main.demos.ui.form-textarea',
    component: FormTextarea
  }
];

const uiRoutes = [
  {
    path: 'forms',
    name: 'main.demos.ui.forms',
    component: BlankLayout,
    children: [
      {
        path: 'button',
        name: 'main.demos.ui.button',
        component: Button
      },
      {
        path: 'form',
        name: 'main.demos.ui.form',
        component: Form,
        children: formRoutes
      },
      {
        path: 'cells',
        name: 'main.demos.ui.cells',
        component: Cells
      },
      {
        path: 'slider',
        name: 'main.demos.ui.slider',
        component: Slider
      }
    ]
  },
  {
    path: 'basics',
    name: 'main.demos.ui.basics',
    component: BlankLayout,
    children: [
      {
        path: 'flex',
        name: 'main.demos.ui.flex',
        component: Flex
      },
      {
        path: 'icons',
        name: 'main.demos.ui.icon',
        component: Icon
      },
      {
        path: 'progress',
        name: 'main.demos.ui.progress',
        component: Progress
      }
    ]
  },
  {
    path: 'views',
    name: 'main.demos.ui.views',
    component: BlankLayout,
    children: [
      {
        path: 'swiper',
        name: 'main.demos.ui.swiper',
        component: Swiper
      },
      {
        path: 'scroll-view',
        name: 'main.demos.ui.scroll-view',
        component: ScrollView
      },
      {
        path: 'movable',
        name: 'main.demos.ui.movable',
        component: Movable
      }
    ]
  },
  {
    path: 'feedback',
    name: 'main.demos.ui.feedback',
    component: BlankLayout,
    children: [
      {
        path: 'action-sheet',
        name: 'main.demos.ui.action-sheet',
        component: ActionSheet
      },
      {
        path: 'dialog',
        name: 'main.demos.ui.dialog',
        component: Dialog
      },
      {
        path: 'picker',
        name: 'main.demos.ui.picker',
        component: Picker
      },
      {
        path: 'toast',
        name: 'main.demos.ui.toast',
        component: Toast
      },
      {
        path: 'toptips',
        name: 'main.demos.ui.toptips',
        component: Toptips
      }
    ]
  }
];

export default [
  {
    path: 'ui',
    name: 'main.demos.ui',
    component: UiDemos,
    children: uiRoutes
  }
];
export { uiRoutes, formRoutes };
