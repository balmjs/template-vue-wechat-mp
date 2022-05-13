// NOTE: key name 必须与 `balmrc.js` 中的 `scripts.entry` 入口文件输出名保持一致（源于 vue-router 的 path）
module.exports = {
  main: ['/(main)?'],
  'wx-component': ['/wx-component', '/wx-component/form'],
  'mp-component': ['/mp-component', '/mp-component/form'],
  'wx-api': ['/wx-api']
  // 'wx-cloud': ['/wx-cloud']
};
