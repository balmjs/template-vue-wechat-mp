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
  mix.copy('node_modules/kbone-ui/lib/weui/weui.css', 'app/styles');
  mix.replace('app/styles/weui.css', 'app/styles', replaceOptions);
};
