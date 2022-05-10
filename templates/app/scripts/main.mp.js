import createApp from './create-app';
import App from '@/views/layouts/app';
import router from '@/routes/main';
import getReadme from '@/config/readme';

const createMainApp = (KBoneUI) =>
  createApp(App, router, KBoneUI, (Vue) => {
    Vue.prototype.readme = getReadme();
  });

export default createMainApp;
