import Vue from 'vue';
import { DEBUG } from '@/config';
import dev from './models/dev';
import user from './models/user';

export default new Vue({
  name: 'store',
  mixins: [DEBUG ? dev : {}, user]
});
