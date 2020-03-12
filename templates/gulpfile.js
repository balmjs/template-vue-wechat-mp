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

    // Fuck MP bug
    mix.replace('./dist/mp/common/css/*.wxss', './dist/mp/common/css', {
      substr: /(\.weui-article \*,)|(\*{margin:0;padding:0})|(\.weui-article \*{max-width:100%;box-sizing:border-box})/g,
      replacement: ''
    });
    mix.replace('./dist/mp/common/css/*.wxss', './dist/mp/common/css', {
      substr: /class\*=weui-icon-/g,
      replacement: 'class^=weui-icon-'
    });

    // For css entry
    mix.copy('./app/index.wxss', './dist/mp/pages/main');
  }
});
