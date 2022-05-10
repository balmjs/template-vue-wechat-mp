<template>
  <div>
    <wx-button class="weui-btn" type="primary" @click="onDownload">
      下载
    </wx-button>
    <div style="text-align: center; margin: 20px">
      <img
        v-show="imgUrl"
        :src="imgUrl"
        alt="图片下载"
        style="max-width: 100px"
      />
    </div>
  </div>
</template>

<script>
const imageBaseUrl = 'https://mp.balmjs.com/img';

export default {
  data() {
    return {
      imgUrl: ''
    };
  },
  methods: {
    onDownload() {
      const min = 1;
      const max = 80;
      const x = Math.floor(Math.random() * (max - min + 1)) + min;

      const type = Math.floor(Math.random() * 2) ? 'fishing' : 'insect';

      return this.$wxApi
        .downloadFile({
          url: `${imageBaseUrl}/${type}/${x}.jpg`
        })
        .then((res) => {
          this.imgUrl = res.tempFilePath;
        });
    }
  }
};
</script>
