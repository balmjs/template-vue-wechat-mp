import createApp from './create-app';
import App from '@/views/layouts/app';
import router from '@/routes/wx-cloud';

const createCloudApp = (KBoneUI) => createApp(App, router, KBoneUI);

export default createCloudApp;
