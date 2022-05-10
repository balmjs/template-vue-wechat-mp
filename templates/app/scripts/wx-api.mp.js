import createApp from './create-app';
import App from '@/views/layouts/app';
import router from '@/routes/wx-api';

const createApiApp = (KBoneUI) => createApp(App, router, KBoneUI);

export default createApiApp;
