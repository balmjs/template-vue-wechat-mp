const getResetCss = require('../init/css-reset');
const useWeuiCss = require('../init/css-weui');
const useVendorUI = require('../init/vendor-ui');
const useMP = require('./mp');
const publish = require('./publish');

module.exports = (balm, wxInit) => {
  const api = mix => {
    if (wxInit) {
      getResetCss(mix);
      useWeuiCss(mix);
      useVendorUI(mix);
    }

    if (mix.env.isMP) {
      useMP(mix);
    } else {
      // Clear miniprogram css
      mix.remove(['dist/web/index.wxss', 'dist/web/css/reset.css']);

      publish(mix);
    }
  };

  return api;
};
