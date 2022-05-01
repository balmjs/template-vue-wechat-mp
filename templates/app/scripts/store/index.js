import demo from './modules/demo';

export default {
  mixins: [demo],
  methods: {
    onClickJump(url) {
      window.location.href = url;
    },
    onClickOpen(url) {
      window.open(url);
    }
  }
};
