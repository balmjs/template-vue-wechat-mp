import createApp from './create-app';
import App from '@/views/layouts/app';
import router from '@/routes/main';

const createMainApp = (KBoneUI) =>
  createApp(App, router, KBoneUI);

export default createMainApp;
