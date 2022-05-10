const env = require('../env');
const wxRouter = require('../wx/router');

const wxRouterKeys = Object.keys(wxRouter);

module.exports = (isMP = false) => {
  const entry = {};
  const suffix = isMP ? `.mp.js` : '.js';

  wxRouterKeys.forEach(
    (key) => (entry[key] = `./${env.appRoot}/scripts/${key}${suffix}`)
  );

  return entry;
};
