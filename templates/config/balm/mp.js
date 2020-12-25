const { src, dest, parallel } = require('gulp');

function syncWxss() {
  return src('./app/index.wxss').pipe(dest('.tmp/pages/main'));
}

module.exports = function useMP(mix) {
  const mpDir = mix.env.isProd ? './dist/mp' : '.tmp';
  const mpCommonDir = `${mpDir}/common`;

  // sync wxss entry
  mix.copy('./app/index.wxss', `${mpDir}/pages/main`);

  if (mix.env.isDev) {
    mix.serve((watcher, reload) => {
      watcher.on('change', file => {
        const extname = file.split('.')[1];

        if (extname === 'scss') {
          mix.sass('app/styles/main.scss', `${mpCommonDir}/css`);
        }

        if (extname === 'js' || extname === 'vue') {
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
        }
      });
    });
  }
};
