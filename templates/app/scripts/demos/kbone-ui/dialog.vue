<template>
  <div>
    <KButton @click="showDialog">Show Dialog</KButton>
    <KDialog
      v-model="diaShow"
      :buttons="diaBtn"
      title="Hello BalmJS"
      desc="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      diaShow: false,
      diaBtn: [
        {
          text: '确定',
          click: () => {
            console.log('确定');
            this.diaShow = false;
          }
        }
      ]
    };
  },
  methods: {
    showDialog() {
      this.diaShow = true;
    }
  }
};
</script>
