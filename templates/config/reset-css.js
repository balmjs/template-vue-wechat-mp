const appCssResetDir = 'app/styles/global/reset';

const wxss = ['app.extra', 'app', 'app.display'];

const replaceOptions = {
  substr: /.+\s*{/g,
  replacement: function(match) {
    const key = match === 'table > tr {' ? '>' : ',';
    const result = match.split(key).map(selector => `.h5-${selector.trim()}`);
    return result.join(key);
  }
};

module.exports = function cssReset(mix) {
  wxss.forEach(name => {
    mix.copy(
      `./node_modules/mp-webpack-plugin/src/tmpl/${name}.tmpl.wxss`,
      appCssResetDir,
      {
        rename: {
          basename: `_${name}`,
          extname: '.scss'
        }
      }
    );

    if (name !== 'app.extra') {
      mix.replace(
        `${appCssResetDir}/_${name}.scss`,
        appCssResetDir,
        replaceOptions
      );
    }
  });
};
