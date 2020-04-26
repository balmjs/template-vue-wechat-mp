const cssReset = process.argv.includes('--wxss');
const balm = require('balm');
const config = require('./config/balmrc');
const publish = require('./config/balm.publish');
const fuckMP = require('./config/fuck-mp');
const afterTask = require('./config/balm.after-task');
const resetCss = require('./config/reset-css');

if (cssReset) {
  balm.config = {
    useDefaults: false
  };
} else {
  balm.config = config;
  balm.afterTask = afterTask;
}

balm.go(mix => {
  if (cssReset) {
    resetCss(mix);
  }

  if (mix.env.isMP) {
    fuckMP(mix);
  } else {
    // Clear miniprogram css
    mix.remove(['dist/web/index.wxss', 'dist/web/h5/css/reset.css']);

    publish(mix);
  }
});
