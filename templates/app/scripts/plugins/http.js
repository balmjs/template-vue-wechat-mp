import axios from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';
import bus from '@/store/bus';
import { isMP } from '@/config';

if (isMP) {
  axios.defaults.adapter = mpAdapter;
}

axios.defaults.baseURL = '/api';

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    bus.$emit('off-loading');

    return response.data;
  },
  error => {
    bus.$emit('off-loading');

    return Promise.reject(error);
  }
);

export default {
  install(Vue) {
    Vue.prototype.$http = axios;
  }
};
