const env = require('./env');
const router = require('./wx.router');
const customConfig = require('./wx.custom-component');

// Kbone 配置 - https://wechat-miniprogram.github.io/kbone/docs/config/
const kboneConfig = {
  origin: env.host,
  entry: '/',
  router,
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
  appExtraConfig: {
    sitemapLocation: 'sitemap.json'
  },
  global: {
    share: true,
    windowScroll: false,
    pullDownRefresh: true,
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
