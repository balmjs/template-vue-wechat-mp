export default {
  computed: {
    hiddenGoBack() {
      return this.$route.name === 'home';
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
