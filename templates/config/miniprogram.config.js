// Kbone 配置 - https://wechat-miniprogram.github.io/kbone/docs/config/
module.exports = {
  origin: 'https://mp.balmjs.com',
  entry: '/(home|index)?',
  router: {
    index: ['/']
  },
  redirect: {
    notFound: 'home',
    accessDenied: 'home'
  },
  generate: {
    globalVars: [],
    autoBuildNpm: 'npm'
  },
  app: {
    navigationBarTitleText: 'BalmJS for MP'
  },
  global: {},
  projectConfig: {
    appid: '',
    projectname: 'vue-wechat-mp'
  },
  packageConfig: {
    author: 'BalmJS'
  }
};
