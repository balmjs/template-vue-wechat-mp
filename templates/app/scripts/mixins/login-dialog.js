export default {
  data() {
    return {
      showLogin: false,
      code: ''
    };
  },
  created() {
    this.wxlogin();
  },
  methods: {
    async wxlogin() {
      let { code } = await this.$wxApi.login();
      this.code = code;
    },
    async login(detail) {
      let data = Object.assign({}, detail);
      data.code = this.code;

      let res = await this.$http.post('/wxlogin', data); // NOTE: 后台接口需自行修改
      console.log(res); // TODO: 自动登录后获取用户信息
    },
    async getUserInfo({ detail }) {
      this.$bus.emit('on-loading');
      this.showLogin = false;

      try {
        await this.$wxApi.checkSession();
        // session_key 未过期，并且在本生命周期一直有效
        this.login(detail);
      } catch (e) {
        // session_key 已经失效，需要重新执行登录流程
        await this.wxlogin();
        await this.login(detail);
      }
    }
  }
};
