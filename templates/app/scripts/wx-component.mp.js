import createApp from './create-app';
import App from '@/views/layouts/app';
import router from '@/routes/wx-component';

const createWxApp = (KBoneUI) => createApp(App, router, KBoneUI);

export default createWxApp;
