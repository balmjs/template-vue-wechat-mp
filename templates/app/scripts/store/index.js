import demo from './modules/demo';

export default {
  mixins: [demo],
  data() {
    return {
      router: new Map()
    };
  },
  methods: {
    onClickJump(url) {
      window.location.href = url;
    },
    onClickOpen(url) {
      window.open(url);
    }
  }
};
