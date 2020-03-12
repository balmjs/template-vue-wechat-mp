module.exports = {
  origin: 'https://test.miniprogram.com',
  entry: '/test/aaa',
  router: {
    index: ['/test/aaa', '/test/bbb']
  },
  redirect: {
    notFound: 'index',
    accessDenied: 'index'
  },
  generate: {
    globalVars: [],
    autoBuildNpm: 'npm'
  },
  app: {
    navigationBarTitleText: 'miniprogram-project'
  },
  global: {
    // rem: true, // 是否支持 rem
    // pageStyle: true // 是否支持修改页面样式
  },
  projectConfig: {
    appid: '',
    projectname: 'vue-wechat-mp'
  },
  packageConfig: {
    author: 'BalmJS'
  }
};
