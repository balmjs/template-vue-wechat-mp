import { responsive } from '@/plugins/wx-api';

export default {
  computed: {
    routeEntry() {
      return this.$route.name && this.$route.name.split('.')[0];
    },
    isHomePage() {
      return this.$route.name === 'main';
    },
    isPackageHome() {
      return /\.home$/.test(this.$route.name);
    }
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
  }
};
