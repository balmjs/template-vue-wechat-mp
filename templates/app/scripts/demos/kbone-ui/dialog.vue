<template>
  <div>
    <KButton @click="diaShow = true">Dialog 样式1</KButton>
    <KButton @click="dualShow = true">Dialog 样式2</KButton>

    <KDialog
      v-model="diaShow"
      :buttons="diaBtn"
      title="弹窗标题"
      desc="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
    ></KDialog>
    <KDialog
      v-model="dualShow"
      :buttons="dualBtn"
      title="弹窗标题"
      desc="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
    ></KDialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      diaShow: false,
      dualShow: false,
      diaBtn: [
        {
          text: '确定',
          click: () => {
            console.log('确定');
            this.diaShow = false;
          }
        }
      ],
      dualBtn: [
        {
          text: '取消',
          click: () => {
            console.log('取消');
            this.dualShow = false;
          }
        },
        {
          text: '确定',
          click: () => {
            console.log('确定');
            this.dualShow = false;
          }
        }
      ]
    };
  }
};
</script>
