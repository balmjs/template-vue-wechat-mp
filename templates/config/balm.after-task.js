const balm = require('balm');
const fs = require('fs');
const myAppConfig = require('./miniprogram.config');
const targetFile = 'dist/mp/app.json';

function updateAppConfig() {
  if (balm.config.env.isMP && balm.config.env.isProd) {
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
}

module.exports = updateAppConfig;
