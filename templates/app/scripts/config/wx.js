import KboneAPI from 'kbone-api'; // 小程序API文档 - https://developers.weixin.qq.com/miniprogram/dev/api/
import { isMP } from '@/config';

function autoUpdateVersion() {
  if (KboneAPI.canIUse('getUpdateManager')) {
    const updateManager = KboneAPI.getUpdateManager();

    updateManager.onCheckForUpdate(({ hasUpdate }) => {
      if (hasUpdate) {
        updateManager.onUpdateReady(() => {
          KboneAPI.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success({ confirm }) {
              if (confirm) {
                updateManager.applyUpdate();
              }
            }
          });
        });

        updateManager.onUpdateFailed(() => {
          KboneAPI.showModal({
            title: '更新提示',
            content: '新版本已经准备好，请您删除当前小程序，重新搜索打开哟~'
          });
        });
      }
    });
  } else {
    KboneAPI.showModal({
      title: '提示',
      content:
        '当前微信版本过低，无法自动更新小程序，请升级到最新微信版本后重试。'
    });
  }
}

function refreshRem() {
  let clientWidth = KboneAPI.getSystemInfoSync().screenWidth;
  if (clientWidth > 540) {
    clientWidth = 540;
  }
  const rootFontSize = `${clientWidth / 10}px`;
  document.documentElement.style.fontSize = rootFontSize;
}

function wxInit(Vue) {
  if (isMP) {
    window.onload = refreshRem;

    window.addEventListener('wxload', autoUpdateVersion);
    window.addEventListener('wxshow', refreshRem);

    KboneAPI.onWindowResize(() => {
      KboneAPI.nextTick(() => {
        refreshRem();
      });
    });
  }

  Vue.prototype.isMP = isMP;
  Vue.use(KboneAPI);
}

export default wxInit;
