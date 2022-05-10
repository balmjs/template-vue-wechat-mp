<template>
  <div class="page login js_show">
    <wx-button
      class="weui-btn"
      type="primary"
      :loading="loading"
      @click="onRequest"
    >
      Request
    </wx-button>
  </div>
</template>

<script>
const url = 'https://mp.balmjs.com';

export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    onRequest() {
      this.loading = true;
      return this.$wxApi
        .request({
          url
        })
        .then(() => {
          this.loading = false;
          this.$wxApi.showToast({
            title: '请求成功'
          });
        });
    }
  }
};
</script>
