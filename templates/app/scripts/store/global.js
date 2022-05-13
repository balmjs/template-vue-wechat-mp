export default {
  methods: {
    redirectTo(url) {
      window.location.href = url;
    },
    navigateTo(url) {
      window.open(url);
    },
    navigateBack() {
      window.close();
    },
    bufferToBase64(arrayBuffer) {
      return `data:image/png;base64,${this.$wxApi.arrayBufferToBase64(
        arrayBuffer
      )}`;
    }
  }
};
