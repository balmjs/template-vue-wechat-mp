const env = require('../env');

module.exports = function useVendorUI(mix) {
  mix.remove(`${env.appRoot}/wx-components/vant-ui`);
  mix.copy(
    'node_modules/@vant/weapp/lib/**/*',
    `${env.appRoot}/wx-components/vant-ui`
  );
};
