export default {
  data() {
    return {
      showLogin: false,
      code: ''
    };
  },
  computed: {
    hiddenGoBack() {
      return this.$route.name === 'home';
    }
  },
  async created() {
    let { code } = await this.$api.login();
    this.code = code;
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    async getUserInfo({ detail }) {
      this.showLogin = false;

      console.log('gg', detail);
      let data = Object.assign({}, detail);
      data.code = this.code;

      console.log('wxlogin formdata:', data);
      await this.$http.post('/wxlogin', data);
    }
  }
};
