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
    appWxss: 'display',
    globalVars: [],
    autoBuildNpm: 'npm'
  },
  app: {
    navigationBarTitleText: 'BalmJS for MP'
  },
  global: {
    rem: true
  },
  projectConfig: {
    appid: '',
    projectname: 'vue-wechat-mp'
  },
  packageConfig: {
    author: 'BalmJS'
  }
};
