const wxInit = process.argv.includes('--wx-init');
const getConfig = require('./config/balm');
const getAfterTask = require('./config/balm/after-task');
const getApi = require('./config/balm/api');

module.exports = balm => {
  return {
    config: getConfig(balm, wxInit),
    afterTask: getAfterTask(balm, wxInit),
    api: getApi(balm, wxInit)
  };
};
