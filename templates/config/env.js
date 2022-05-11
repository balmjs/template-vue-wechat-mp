const wxRouter = require('./wx/router');

const subPackageNamespace = 'sub';

function getSubPackages(wxRouter) {
  const wxRouterKeys = Object.keys(wxRouter);
  wxRouterKeys.shift();

  const subPackages = {};
  wxRouterKeys.forEach(
    (key, index) =>
      (subPackages[`${subPackageNamespace + (index + 1)}`] = [key])
  );

  return subPackages;
}

module.exports = {
  appRoot: 'app',
  subPackages: getSubPackages(wxRouter),
  host: 'https://mp.balmjs.com',
  appId: 'wx08d0ca8fad40ec22',
  useCustomComponent: false // 是否使用自定义微信组件
};
