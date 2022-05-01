const { src, dest, parallel } = require('gulp');
const env = require('../env');

const tmpRoot = '.mp';
const wxssEntry = `./${env.appRoot}/wx-pages/main/index.wxss`;

function syncMainWxss() {
  return src(wxssEntry).pipe(dest(`${tmpRoot}/pages/main`));
}

function syncSubWxss(done) {
  for (const [key, value] of Object.entries(env.subPackages)) {
    const name = value[0];
    src(`./${env.appRoot}/wx-pages/${name}/index.wxss`).pipe(
      dest(`${tmpRoot}/${key}/pages/${name}`)
    );
  }
  done();
}

module.exports = function useMP(mix) {
  const mpDir = mix.env.isProd ? './dist/mp' : tmpRoot;
  const mpCommonDir = `${mpDir}/common`;

  mix.copy(`${env.appRoot}/styles/app-vendors/*`, `${mpCommonDir}/css`);
  // sync wxss entry
  mix.copy(wxssEntry, `${mpDir}/pages/main`);
  // for sub packages
  for (const [key, value] of Object.entries(env.subPackages)) {
    const name = value[0];
    mix.copy(
      `./${env.appRoot}/wx-pages/${name}/index.wxss`,
      `${mpDir}/${key}/pages/${name}`
    );
  }

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
            mix.webpack(
              {
                main: `./${env.appRoot}/scripts/main.mp.js`,
                sub: `./${env.appRoot}/scripts/sub.mp.js`
              },
              `${mpCommonDir}/js`,
              {},
              () => {
                parallel(syncMainWxss, syncSubWxss)();
              }
            );
            break;
          default:
        }
      });
    });
  }
};
