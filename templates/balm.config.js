const cssReset = process.argv.includes('--wxss');
const getConfig = require('./config/balmrc');
const getAfterTask = require('./config/balm.after-task');
const getApi = require('./config/balm.api');

module.exports = balm => {
  return {
    config: getConfig(balm, cssReset),
    afterTask: getAfterTask(balm, cssReset),
    api: getApi(balm, cssReset)
  };
};
