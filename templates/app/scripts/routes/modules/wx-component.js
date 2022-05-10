import BlankLayout from '@/views/layouts/blank';
import Home from '@/views/wx-component/home';

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
import Editor from '@/views/wx-component/form/editor';

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
  // {
  //   path: 'editor',
  //   name: 'wx-component.form.editor',
  //   component: Editor
  // }
];

const wxSubRoutes = [
  {
    path: 'view',
    name: 'wx-component.view',
    component: BlankLayout,
    children: []
  },
  {
    path: 'basic',
    name: 'wx-component.basic',
    component: BlankLayout,
    children: []
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
