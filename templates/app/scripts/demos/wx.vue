<template>
  <div class="page--api-demos">
    <h4>API Demos</h4>
    <p>
      {{ result }}
    </p>
    <KView class="page__hd">
      <KButton @click="login">
        登录
      </KButton>
      <KButton open-type="getUserInfo" @click="getUserInfo">
        获取用户信息
      </KButton>
      <KButton @click="getLocation">
        获取当前的地理位置、速度
      </KButton>
      <KButton @click="chooseImage">
        从本地相册选择图片或使用相机拍照
      </KButton>
      <KButton @click="onRequest">
        AJAX
      </KButton>
    </KView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null
    };
  },
  methods: {
    async login() {
      let { code } = await this.$api.login();
      console.log('login', code);
      this.result = code;
      if (code) {
        this.$api.showToast({
          title: '登录成功'
        });
      }
    },
    async getUserInfo() {
      let { authSetting } = await this.$api.getSetting();
      console.log('authSetting', authSetting);

      if (authSetting['scope.userInfo']) {
        let { userInfo } = await this.$api.getUserInfo();
        console.log(userInfo);
        this.result = userInfo;
      } else {
        let res = await this.$api.authorize({
          scope: 'scope.userInfo'
        });
        console.log(res);
        this.result = res;
      }
    },
    async getLocation() {
      let { authSetting } = await this.$api.getSetting();
      console.log('authSetting', authSetting);

      if (authSetting['scope.userLocation']) {
        let res = await this.$api.getLocation();
        console.log('getLocation', res);
        this.result = res;
      } else {
        try {
          let res = await this.$api.authorize({
            scope: 'scope.userLocation'
          });
          console.log(res);
          this.result = res;
        } catch (e) {
          console.log(e);
          this.result = e;
        }
      }
    },
    async chooseImage() {
      let res = await this.$api.chooseImage();
      console.log(res);
      this.result = res;
    },
    async onRequest() {
      let res = await this.$api.request({
        url: 'test.php' // 仅为示例，并非真实的接口地址
      });
      console.log('success', res.data);
    }
  }
};
</script>
