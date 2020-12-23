<template>
  <div>
    <KButton @click="showToast('success')">成功提示</KButton>
    <KButton @click="showToast('loading')">加载中提示</KButton>
    <KButton @click="showToast('warn')">警告提示</KButton>
    <KButton @click="showToast('info')">提示</KButton>
    <KToast :type="type" v-model="loadingToast" :duration="3000"
      >提示文字</KToast
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      loadingToast: false
    };
  },
  methods: {
    showToast(type) {
      this.type = type;
      this.loadingToast = true;
    }
  }
};
</script>
