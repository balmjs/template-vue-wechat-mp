const resetCss = require('./reset-css');
const fuckMP = require('./balm.fuck-mp');
const publish = require('./balm.publish');

module.exports = (balm, cssReset) => {
  const api = mix => {
    if (cssReset) {
      resetCss(mix);
    }

    if (mix.env.isMP) {
      fuckMP(mix);
    } else {
      // Clear miniprogram css
      mix.remove(['dist/web/index.wxss', 'dist/web/css/reset.css']);

      publish(mix);
    }
  };

  return api;
};
