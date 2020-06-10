import Vue from 'vue';
import { isDev } from '@/config';
import dev from './dev';
import user from './models/user';

export default new Vue({
  name: 'Store',
  mixins: [isDev ? dev : {}, user]
});
