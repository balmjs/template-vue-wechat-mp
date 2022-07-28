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
      // TODO: 微信小程序bug - 外部 AJAX 后 setData 不生效
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

      // TODO: 临时解决 - 外部 AJAX 后 setData 不生效
      this.setData({
        showDialog: false
      });

      this.triggerEvent('getPhoneNumber', result);
    }
  }
});
