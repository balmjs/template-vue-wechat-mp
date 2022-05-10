import wxRoutes from './wx-component';
import mpRoutes from './mp-component';
import apiRoutes from './wx-api';
import cloudRoutes from './wx-cloud';

export default [...wxRoutes, ...mpRoutes, ...apiRoutes, ...cloudRoutes];
