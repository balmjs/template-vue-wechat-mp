import PickerDemo from '@/demos/kbone/picker';
import SwiperDemo from '@/demos/kbone/swiper';
import ScrollViewDemo from '@/demos/kbone/scroll-view';
import MovableDemo from '@/demos/kbone/movable';

export default [
  {
    path: 'picker',
    name: 'ui.picker',
    component: PickerDemo
  },
  {
    path: 'swiper',
    name: 'ui.swiper',
    component: SwiperDemo
  },
  {
    path: 'scroll-view',
    name: 'ui.scroll-view',
    component: ScrollViewDemo
  },
  {
    path: 'movable',
    name: 'ui.movable',
    component: MovableDemo
  }
];
