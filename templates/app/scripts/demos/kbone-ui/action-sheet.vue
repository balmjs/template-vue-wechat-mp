<template>
  <div>
    <KButton @click="showTitle">Show title</KButton>
    <KActionSheet
      :actions="['Hello', '小程序']"
      label="选择你的名字"
      v-model="isShowTitle"
      @click="onClick"
    ></KActionSheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowTitle: false,
      actionChoose: ['onClick1', 'onClick2']
    };
  },
  methods: {
    showTitle() {
      this.isShowTitle = true;
    },
    onClick(val) {
      console.log('onClick', val);
    }
  }
};
</script>
