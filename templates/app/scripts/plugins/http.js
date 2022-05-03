import axios from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';
import { useBus } from 'balm-ui-event';
import { isMP } from '@/config';

const bus = useBus();

if (isMP) {
  axios.defaults.adapter = mpAdapter;
}

axios.defaults.baseURL = '/api';

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    bus.$emit('off-loading');

    return response.data;
  },
  (error) => {
    bus.$emit('off-loading');

    return Promise.reject(error);
  }
);

const useHttp = () => axios;

export default {
  install(app) {
    app.prototype.$http = axios;
  }
};
export { useHttp };
