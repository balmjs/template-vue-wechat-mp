const { parallel } = require('gulp');
const wxRouter = require('../wx/router');
const env = require('../env');
const getEntry = require('./entry');

const tmpRoot = '.mp';

module.exports = function useMP(mix) {
  const mpDir = mix.env.isProd ? './dist/mp' : tmpRoot;
  const mpCommonDir = `${mpDir}/common`;

  function syncMainWxss(done) {
    const wxRouterKeys = Object.keys(wxRouter).filter(
      (key) => !/^wx-/.test(key)
    );

    wxRouterKeys.forEach((name) => {
      mix.copy(
        `./${env.appRoot}/wx-pages/main/index.wxss`,
        `${mpDir}/pages/${name}`
      );
    });

    done && done();
  }

  function syncSubWxss(done) {
    for (const [key, value] of Object.entries(env.subPackages)) {
      const name = value[0];
      mix.copy(
        `./${env.appRoot}/wx-pages/sub/index.wxss`,
        `${mpDir}/${key}/pages/${name}`
      );
    }

    done && done();
  }

  // sync wxss entry
  syncMainWxss();
  syncSubWxss();

  if (mix.env.isDev) {
    mix.serve((watcher, reload) => {
      watcher.on('change', (file) => {
        const extname = file.split('.')[1];

        switch (extname) {
          case 'scss':
            mix.sass(`${env.appRoot}/styles/main.scss`, `${mpCommonDir}/css`);
            break;
          case 'js':
          case 'vue':
            mix.webpack(getEntry(true), `${mpCommonDir}/js`, {}, () => {
              parallel(syncMainWxss, syncSubWxss)();
            });
            break;
          default:
        }
      });
    });
  }
};
