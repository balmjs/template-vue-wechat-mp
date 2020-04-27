const env = require('./env');
const customConfig = require('./wx.custom-component');

// Kbone 配置 - https://wechat-miniprogram.github.io/kbone/docs/config/
const kboneConfig = {
  origin: env.host,
  entry: '/(home|index)?',
  router: {
    index: ['/']
  },
  redirect: {
    notFound: 'home',
    accessDenied: 'home'
  },
  generate: Object.assign(
    {
      appWxss: 'default',
      autoBuildNpm: 'npm'
    },
    customConfig.generate
  ),
  app: Object.assign(
    {
      navigationBarTitleText: 'BalmJS for MP'
    },
    customConfig.app
  ),
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

module.exports = kboneConfig;
