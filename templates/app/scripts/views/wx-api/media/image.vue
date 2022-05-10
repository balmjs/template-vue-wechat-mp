<template>
  <div>
    <p>{{ result }}</p>
    <wx-button class="weui-btn" type="primary" @click="chooseImage">
      从本地相册选择图片或使用相机拍照
    </wx-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null
    };
  },
  methods: {
    async chooseImage() {
      const res = await this.$wxApi.chooseImage();
      console.log(res);
      this.result = res;
    }
  }
};
</script>
