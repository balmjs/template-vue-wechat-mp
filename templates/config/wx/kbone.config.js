const env = require('../env');
const router = require('./router');
const customConfig = require('./custom-component');

// Kbone 配置 - https://wechat-miniprogram.github.io/kbone/docs/config/
const kboneConfig = {
  origin: env.host,
  entry: '/',
  router: {
    // NOTE: key name 必须与 `balmrc.js` 中的 `scripts.entry` 入口文件输出名保持一致
    main: router.main,
    sub: router.sub
  },
  redirect: {
    notFound: 'main',
    accessDenied: 'main'
  },
  generate: Object.assign(
    {
      appWxss: 'default',
      subpackages: env.subPackages,
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
  // appExtraConfig: {
  //   useExtendedLib: {
  //     kbone: true
  //   }
  // },
  global: {
    share: true,
    rem: true
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
