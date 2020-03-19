const demoRoutes = require('./demo-routes');

module.exports = {
  origin: 'https://mp.balmjs.com',
  entry: '/(home|index)?',
  router: {
    index: ['/'].concat(demoRoutes)
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
