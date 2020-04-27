const path = require('path');

const useCustomComponent = false;

module.exports = useCustomComponent
  ? {
      generate: {
        wxCustomComponent: {
          root: path.join(__dirname, '../custom-component'),
          usingComponents: {
            'top-status-bar': {
              path: 'top-status-bar/index',
              props: ['title', 'hiddenGoBack', 'bgColor', 'colorStop'],
              events: ['ready', 'back']
            },
            // 注意：目前 getPhoneNumber 接口针对非个人开发者，且完成了认证的小程序开放（不包含海外主体）。
            // 需谨慎使用，若用户举报较多或被发现在不必要场景下使用，微信有权永久回收该小程序的该接口权限。
            'login-dialog': {
              path: 'login-dialog/index',
              props: ['open'],
              events: ['getPhoneNumber']
            }
          }
        }
      },
      app: {
        navigationStyle: 'custom'
      }
    }
  : {
      generate: {},
      app: {}
    };
