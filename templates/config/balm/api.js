const getResetCss = require('../init/css-reset');
// const useVendorUI = require('../init/vendor-ui');
const useMP = require('./mp');

module.exports = (wxInit) => {
  const api = (mix) => {
    if (wxInit) {
      getResetCss(mix);
      // useVendorUI(mix);
    }

    if (mix.env.isMP) {
      useMP(mix);
    } else {
      // Clear miniprogram css and js
      mix.remove([
        'dist/web/rev-manifest.json',
        'dist/web/css/reset.css',
        'dist/web/js/mp-*.js',
        'dist/web/js/wx-*.js'
      ]);
    }
  };

  return api;
};
