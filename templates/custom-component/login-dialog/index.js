Component({
  properties: {
    open: {
      type: Boolean,
      value: false
    },
    buttonText: {
      type: String,
      value: '登录'
    },
    useCloud: {
      type: Boolean,
      value: false
    }
  },
  data: {
    showDialog: false
  },
  observers: {
    open: function(value) {
      this.setData({
        showDialog: value
      });
    }
  },
  methods: {
    async getPhoneNumber({ detail }) {
      let result;
      let { encryptedData, iv, cloudID } = detail;

      if (this.useCloud) {
        // 云调用直接获取开放数据
        result = await wx.cloud.callFunction({
          name: 'getUserInfo',
          data: {
            userInfo: wx.cloud.CloudID(cloudID)
          }
        });
      } else {
        // 开发者后台校验与解密开放数据
        result = {
          encryptedData,
          iv
        };
      }

      this.triggerEvent('getPhoneNumber', result);
    }
  }
});
