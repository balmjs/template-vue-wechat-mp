<template>
  <KView class="page login js_show">
    <KView class="page__hd">
      <h1 class="page__title">apis</h1>
      <p class="page__desc">调用 api 相关信息</p>
      <p>{{ result }}</p>
    </KView>
    <KView class="page__hd">
      <KButton @click="login">登录</KButton>
      <!-- 需企业appid -->
      <!-- <KButton open-type="getUserInfo" @click="getUserInfo">
        获取用户信息
      </KButton> -->
      <KButton @click="getSetting">获取小程序设置</KButton>
      <KButton open-type="openSetting">打开小程序设置</KButton>
    </KView>
  </KView>
</template>

<script>
export default {
  name: 'Login',
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
    async getSetting() {
      // 获取用户设置
      let res = await this.$api.getSetting();
      this.$api.showToast({
        title: `Hello ${res.nickName || 'BalmJS'}`
      });
    }
  }
};
</script>
