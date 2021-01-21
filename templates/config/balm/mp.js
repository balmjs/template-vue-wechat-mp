const { src, dest, parallel } = require('gulp');

const tmpRoot = '.mp';
const wxssEntry = './app/wx-pages/main/index.wxss';

function syncWxss() {
  return src(wxssEntry).pipe(dest(`${tmpRoot}/pages/main`));
}

module.exports = function useMP(mix) {
  const mpDir = mix.env.isProd ? './dist/mp' : tmpRoot;
  const mpCommonDir = `${mpDir}/common`;

  // sync wxss entry
  mix.copy(wxssEntry, `${mpDir}/pages/main`);

  if (mix.env.isDev) {
    mix.serve((watcher, reload) => {
      watcher.on('change', file => {
        const extname = file.split('.')[1];

        switch (extname) {
          case 'scss':
            mix.sass('app/styles/main.scss', `${mpCommonDir}/css`);
            break;
          case 'js':
          case 'vue':
            mix.webpack(
              {
                main: './app/scripts/main.mp.js'
              },
              `${mpCommonDir}/js`,
              {},
              () => {
                parallel(syncWxss)();
              }
            );
            break;
          default:
        }
      });
    });
  }
};
