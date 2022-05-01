import createApp from './app';
import App from '@/views/layouts/sub';
import router from '@/routes/sub';

const createSubApp = () => createApp(App, router);

export default createSubApp;
