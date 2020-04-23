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
        },
        // 注意：目前 getPhoneNumber 接口针对非个人开发者，且完成了认证的小程序开放（不包含海外主体）。
        // 需谨慎使用，若用户举报较多或被发现在不必要场景下使用，微信有权永久回收该小程序的该接口权限。
        'login-dialog': {
          path: 'login-dialog/index',
          props: ['open'],
          events: ['getPhoneNumber']
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
