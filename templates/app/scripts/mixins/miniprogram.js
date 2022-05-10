import wxRouter from '../../../config/wx/router';
import { responsive } from '@/plugins/wx-api';

export default {
  data() {
    return {
      topAppBarHeight: 0,
      showLogin: false,
      code: ''
    };
  },
  computed: {
    routeEntry() {
      return this.$route.name && this.$route.name.split('.')[0];
    },
    hiddenGoBack() {
      return Object.keys(wxRouter).includes(this.$route.name);
    },
    contentStyle() {
      return this.isMP ? { 'padding-top': `${this.topAppBarHeight}px` } : {};
    }
  },
  async created() {
    // await this.wxlogin();
  },
  mounted() {
    if (!this.isMP) {
      responsive();
      window.addEventListener('balmResize', responsive);
      window.addEventListener('orientationchange', responsive);
    }
  },
  beforeDestroy() {
    if (!this.isMP) {
      window.removeEventListener('balmResize', responsive);
      window.removeEventListener('orientationchange', responsive);
    }
  },
  methods: {
    onReady({ detail }) {
      this.topAppBarHeight = detail.height;
    },
    goBack() {
      if (window.history.length === 1) {
        this.$router.replace({ name: this.routeEntry });
      } else {
        this.$router.back();
      }
    },
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
