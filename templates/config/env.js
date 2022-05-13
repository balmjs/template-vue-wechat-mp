const path = require('path');
const wxRouter = require('./wx/router');

const workspace = path.join(__dirname, '..');

function resolve(dir) {
  return path.join(workspace, dir);
}

const subPackageNamespace = 'sub';

function getSubPackages(wxRouter) {
  const wxRouterKeys = Object.keys(wxRouter).filter((key) => /^wx-/.test(key));

  const subPackages = {};
  wxRouterKeys.forEach(
    (key, index) =>
      (subPackages[`${subPackageNamespace + (index + 1)}`] = [key])
  );

  return subPackages;
}

module.exports = {
  workspace,
  resolve,
  appRoot: 'app',
  subPackages: getSubPackages(wxRouter),
  host: 'https://mp.balmjs.com',
  appId: 'wx08d0ca8fad40ec22',
  useCustomComponent: false // 是否使用自定义微信组件
};
