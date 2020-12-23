import UiDemos from '@/demos/kbone-ui/index';
import Button from '@/demos/kbone-ui/button';
import Flex from '@/demos/kbone-ui/flex';
import ScrollView from '@/demos/kbone-ui/scroll-view';
import Form from '@/demos/kbone-ui/form';
import Slider from '@/demos/kbone-ui/slider';
import ActionSheet from '@/demos/kbone-ui/action-sheet';
import Dialog from '@/demos/kbone-ui/dialog';
import Toast from '@/demos/kbone-ui/toast';
import Progress from '@/demos/kbone-ui/progress';
import Toptips from '@/demos/kbone-ui/toptips';
import Picker from '@/demos/kbone-ui/picker';
import Swiper from '@/demos/kbone-ui/swiper';
import Cells from '@/demos/kbone-ui/cells';
import Movable from '@/demos/kbone-ui/movable';

export default [
  {
    path: 'ui',
    name: 'demos.ui',
    component: UiDemos,
    children: [
      {
        path: 'button',
        name: 'ui.button',
        component: Button
      },
      {
        path: 'flex',
        name: 'ui.flex',
        component: Flex
      },
      {
        path: 'scroll-view',
        name: 'ui.scroll-view',
        component: ScrollView
      },
      {
        path: 'form',
        name: 'ui.form',
        component: Form
      },
      {
        path: 'slider',
        name: 'ui.slider',
        component: Slider
      },
      {
        path: 'action-sheet',
        name: 'ui.action-sheet',
        component: ActionSheet
      },
      {
        path: 'dialog',
        name: 'ui.dialog',
        component: Dialog
      },
      {
        path: 'toast',
        name: 'ui.toast',
        component: Toast
      },
      {
        path: 'progress',
        name: 'ui.progress',
        component: Progress
      },
      {
        path: 'toptips',
        name: 'ui.toptips',
        component: Toptips
      },
      {
        path: 'picker',
        name: 'ui.picker',
        component: Picker
      },
      {
        path: 'swiper',
        name: 'ui.swiper',
        component: Swiper
      },
      {
        path: 'cells',
        name: 'ui.cells',
        component: Cells
      },
      {
        path: 'movable',
        name: 'ui.movable',
        component: Movable
      }
    ]
  }
];
