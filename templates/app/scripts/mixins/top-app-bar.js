export default {
  data() {
    return {
      topAppBarHeight: 0
    };
  },
  computed: {
    containerStyle() {
      return this.isMP ? { 'padding-top': `${this.topAppBarHeight}px` } : {};
    }
  },
  methods: {
    onReady({ detail }) {
      this.topAppBarHeight = detail.height;
    }
  }
};
