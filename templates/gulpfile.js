const balm = require('balm');
const config = require('./config/balmrc');

balm.config = config;

balm.go(mix => {
  if (mix.env.isProd) {
    // For external css
    mix.copy('./dist/web/css/*', './dist/mp/common/css', {
      rename: {
        extname: '.wxss'
      }
    });
    mix.remove('./dist/mp/common/css/*.css');
    // For css entry
    mix.copy('./app/index.wxss', './dist/mp/pages/main');

    // For test data
    // mix.copy('./app/data/*', './dist/web/api');
    // mix.copy('./app/data/*', './dist/mp/api');
  }
});
