<template>
  <div>
    <div>
      <p v-if="code">已登录</p>
      <p v-else>每个微信号中仅需登录一次</p>
    </div>
    <div>
      <wx-button class="weui-btn" type="primary" @click="onLogin">
        登录
      </wx-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: ''
    };
  },
  async created() {
    try {
      await this.$wxApi.checkSession();
      this.onLogin();
    } catch (e) {}
  },
  methods: {
    async onLogin() {
      const { code } = await this.$wxApi.login();
      this.code = code;
    }
  }
};
</script>
