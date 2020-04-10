const balm = require('balm');
const config = require('./config/balmrc');
const fuckMP = require('./config/fuck-mp');
const afterTask = require('./config/balm.after-task');

balm.config = config;
balm.afterTask = afterTask;

balm.go(mix => {
  fuckMP(mix);
});
