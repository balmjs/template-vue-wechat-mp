<template>
  <div>
    <KButton @click="showToptips('success')">Success</KButton>
    <KButton @click="showToptips('info')">Info</KButton>
    <KButton @click="showToptips('error')">Error</KButton>
    <KToptips v-model="infoShow" :type="type" :duration="1000">
      提示
    </KToptips>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      infoShow: false
    };
  },
  methods: {
    showToptips(type) {
      this.type = type;
      this.infoShow = true;
    }
  }
};
</script>
