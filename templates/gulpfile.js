const balm = require('balm');
const config = require('./config/balmrc');
const fuckMP = require('./config/fuck-mp');

balm.config = config;

balm.go(mix => {
  fuckMP(mix);
});
