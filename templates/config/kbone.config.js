const path = require('path');
const env = require('./env');

// Kbone 配置 - https://wechat-miniprogram.github.io/kbone/docs/config/
module.exports = {
  origin: env.host,
  entry: '/(home|index)?',
  router: {
    index: ['/']
  },
  redirect: {
    notFound: 'home',
    accessDenied: 'home'
  },
  generate: {
    appWxss: 'default',
    wxCustomComponent: {
      root: path.join(__dirname, '../custom-component'),
      usingComponents: {
        'top-status-bar': {
          path: 'top-status-bar/index',
          props: ['title', 'hiddenGoBack', 'bgColor', 'colorStop'],
          events: ['back']
        }
      }
    },
    globalVars: [],
    autoBuildNpm: 'npm'
  },
  app: {
    navigationStyle: 'custom'
  },
  global: {
    rem: true
  },
  projectConfig: {
    appid: env.appid,
    projectname: 'vue-wechat-mp'
  },
  packageConfig: {
    author: 'BalmJS'
  }
};
