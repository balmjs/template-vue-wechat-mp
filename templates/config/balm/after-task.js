const fs = require('fs');
const myAppConfig = require('../wx/miniprogram.config');

function updateAppConfig(balm, wxInit) {
  return wxInit
    ? () => {}
    : () => {
        const targetRoot = balm.config.env.isProd
          ? balm.config.roots.target
          : balm.config.roots.tmp;
        const targetFile = `${targetRoot}/app.json`;

        if (balm.config.env.isMP) {
          fs.readFile(targetFile, { encoding: 'utf8' }, (err, data) => {
            let defaultAppCnfig = JSON.parse(data);

            let appConfig = Object.assign(defaultAppCnfig, myAppConfig);
            let jsonString = JSON.stringify(appConfig, null, '\t');

            fs.writeFile(targetFile, jsonString, err => {
              if (err) return console.error(err);
              console.log('"app.json" updated');
            });
          });
        }
      };
}

module.exports = updateAppConfig;
