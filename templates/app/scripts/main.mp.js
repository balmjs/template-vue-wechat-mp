import createApp from './app';
import App from '@/views/layouts/main';
import router from '@/routes/main';
import getReadme from '@/config/readme';

const createMainApp = () =>
  createApp(App, router, (Vue) => {
    Vue.prototype.readme = getReadme();
  });

export default createMainApp;
