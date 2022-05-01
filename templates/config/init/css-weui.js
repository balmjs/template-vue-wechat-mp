const env = require('../env');

const weui = 'node_modules/kbone-ui/lib/weui/weui.css';
const fuckMPBug = [
  /\.weui-article \*,/g,
  /\*{margin:0;padding:0}/g,
  /\.weui-article \*{max-width:100%;box-sizing:border-box}/g
];

const replaceOptions = fuckMPBug.map((substr) => {
  return {
    substr,
    replacement: ''
  };
});

module.exports = function useWeuiCss(mix) {
  // Fix MP bug
  mix.copy(weui, `${env.appRoot}/styles/app-vendors`, {
    rename: {
      basename: 'kbone-ui-weui',
      extname: '.wxss'
    }
  });
  mix.replace(
    `${env.appRoot}/styles/app-vendors/kbone-ui-weui.wxss`,
    `${env.appRoot}/styles/app-vendors`,
    replaceOptions
  );
};
