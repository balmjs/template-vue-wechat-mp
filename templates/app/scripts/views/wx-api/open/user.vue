<template>
  <div>
    <div>
      <h4>用户信息</h4>
      <div v-if="result" style="text-align: center">
        <img :src="result.avatarUrl" />
        <span>{{ result.nickName }}</span>
      </div>
      <p v-else>未获取</p>
    </div>
    <div>
      <wx-button class="weui-btn" type="primary" @click="onClick">
        获取用户信息
      </wx-button>
      <wx-button class="weui-btn" @click="result = null">清空</wx-button>
    </div>
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
    async onClick() {
      const { authSetting } = await this.$wxApi.getSetting();
      console.log('authSetting', authSetting);
      if (authSetting['scope.userInfo']) {
        const { userInfo } = await this.$wxApi.getUserProfile();
        console.log(userInfo);
        this.result = userInfo;
      } else {
        let res = await this.$wxApi.authorize({
          scope: 'scope.userInfo'
        });
        console.log(res);
        this.result = res;
      }
    }
  }
};
</script>
