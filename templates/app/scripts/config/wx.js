import KboneAPI from 'kbone-api'; // 小程序API文档 - https://developers.weixin.qq.com/miniprogram/dev/api/
import { isMP } from '@/config';

function autoUpdateVersion() {
  const updateManager = KboneAPI.getUpdateManager();

  updateManager.onCheckForUpdate(({ hasUpdate }) => {
    console.log('是否有新版本', hasUpdate);
  });

  updateManager.onUpdateReady(() => {
    KboneAPI.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success(res) {
        if (res.confirm) {
          updateManager.applyUpdate();
        }
      }
    });
  });

  updateManager.onUpdateFailed(() => {
    // 新版本下载失败
  });
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
