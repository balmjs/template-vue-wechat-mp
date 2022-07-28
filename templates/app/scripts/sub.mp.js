import createApp from './create-app';
import App from '@/views/layouts/app';
import router from '@/routes/sub';

const createSubApp = (KBoneUI) => createApp(App, router, KBoneUI);

export default createSubApp;
