const cssReset = process.argv.includes('--wxss');
const balm = require('balm');
const config = require('./config/balmrc');
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
  } else {
    fuckMP(mix);
  }
});
