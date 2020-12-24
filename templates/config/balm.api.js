const getResetCss = require('./css-reset');
const useWeuiCss = require('./css-weui');
const useMP = require('./balm.mp');
const publish = require('./balm.publish');

module.exports = (balm, cssInit) => {
  const api = mix => {
    if (cssInit) {
      getResetCss(mix);
      useWeuiCss(mix);
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
