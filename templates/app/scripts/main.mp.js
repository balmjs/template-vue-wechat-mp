import createApp from './app';
import App from '@/views/layouts/main';
import router from '@/routes/main';

const createMainApp = () => createApp(App, router);

export default createMainApp;
