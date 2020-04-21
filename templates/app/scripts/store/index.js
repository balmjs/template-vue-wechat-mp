import Vue from 'vue';
import { DEBUG } from '@/config';
import dev from './dev';
import user from './models/user';

export default new Vue({
  name: 'store',
  mixins: [DEBUG ? dev : {}, user]
});
