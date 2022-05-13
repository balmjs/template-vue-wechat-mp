import cloud from 'wx-server-sdk';

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
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

const wxCloud = {
  getAcode
};

export default {
  install(app) {
    app.prototype.$wxCloud = wxCloud;
  }
};
