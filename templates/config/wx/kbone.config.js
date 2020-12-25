const env = require('../env');
const router = require('./router');
const customConfig = require('./custom-component');

// Kbone 配置 - https://wechat-miniprogram.github.io/kbone/docs/config/
const kboneConfig = {
  origin: env.host,
  entry: '/',
  router: {
    main: router // NOTE: `main` 必须与 `balmrc.js` 中的 `scripts.entry` 入口文件输出名保持一致
  },
  redirect: {
    notFound: 'main',
    accessDenied: 'main'
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
