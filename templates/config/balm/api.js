const getResetCss = require('../init/css-reset');
const useWeuiCss = require('../init/css-weui');
// const useVendorUI = require('../init/vendor-ui');
const useMP = require('./mp');

module.exports = (wxInit) => {
  const api = (mix) => {
    if (wxInit) {
      getResetCss(mix);
      useWeuiCss(mix);
      // useVendorUI(mix);
    }

    if (mix.env.isMP) {
      useMP(mix);
    } else {
      // Clear miniprogram css
      mix.remove(['dist/web/rev-manifest.json', 'dist/web/css/reset.css']);
    }
  };

  return api;
};
