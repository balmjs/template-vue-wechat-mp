module.exports = function useVendorUI(mix) {
  mix.remove('app/wx-components/vant-ui');
  mix.copy('node_modules/@vant/weapp/lib/**/*', 'app/wx-components/vant-ui');
};
