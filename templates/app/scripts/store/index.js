import demo from './modules/demo';

export default {
  mixins: [demo],
  methods: {
    onClickJump(url) {
      window.location.href = url;
    },
    onClickOpen(url) {
      window.open(url);
    },
    bufferToBase64(arrayBuffer) {
      return `data:image/png;base64,${this.$api.arrayBufferToBase64(
        arrayBuffer
      )}`;
    }
  }
};
