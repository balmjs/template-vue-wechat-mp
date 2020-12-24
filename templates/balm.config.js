const cssInit = process.argv.includes('--css-init');
const getConfig = require('./config/balmrc');
const getAfterTask = require('./config/balm.after-task');
const getApi = require('./config/balm.api');

module.exports = balm => {
  return {
    config: getConfig(balm, cssInit),
    afterTask: getAfterTask(balm, cssInit),
    api: getApi(balm, cssInit)
  };
};
