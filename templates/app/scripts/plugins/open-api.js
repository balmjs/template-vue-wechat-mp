import cloud from 'wx-server-sdk';
import env from '../../../config/env';

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

cloud.auth.getAccessToken({
  grant_type: 'client_credential',
  appid: env.appId,
  secret: env.appSecret
});

async function getAcode(path) {
  try {
    const result = await cloud.openapi.wxacode.get({
      path,
      env_version: 'develop',
      width: 430
    });
    return result.buffer;
  } catch (err) {
    return err;
  }
}

const openApi = {
  getAcode
};

export default {
  install(app) {
    app.prototype.$openApi = openApi;
  }
};
