import createApp from './create-app';
import App from '@/views/layouts/app';
import router from '@/routes/mp-component';

const createMpApp = (KBoneUI) => createApp(App, router, KBoneUI);

export default createMpApp;
