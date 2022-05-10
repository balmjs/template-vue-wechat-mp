const env = require('../env');
const router = require('./router');
const wxCustomComponent = require('./custom-component');

// Kbone 配置 - https://wechat-miniprogram.github.io/kbone/docs/config/
const kboneConfig = {
  origin: env.host,
  entry: '/',
  router,
  redirect: {
    notFound: 'main',
    accessDenied: 'main'
  },
  generate: Object.assign({
    appWxss: 'default',
    subpackages: env.subPackages,
    wxCustomComponent,
    autoBuildNpm: false,
    weui: true
  }),
  app: {
    navigationStyle: 'custom'
  },
  appExtraConfig: {
    useExtendedLib: {
      kbone: true,
      weui: true
    }
  },
  global: {
    share: true,
    // shareTimeline: true,
    rem: true
  },
  optimization: {
    wxssUniversalSelector: 'classprefix'
  },
  projectConfig: {
    appid: env.appId,
    projectname: 'vue-wechat-mp'
  },
  packageConfig: {
    author: 'BalmJS'
  }
};

module.exports = kboneConfig;
