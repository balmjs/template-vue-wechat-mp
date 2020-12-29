<template>
  <div>
    <KButton @click="showTitle">Show ActionSheet</KButton>
    <KActionSheet
      v-model="show"
      label="这是一个标题，可以为一行或者两行。"
      :actions="['示例菜单1', '示例菜单2', '示例菜单3']"
      @click="onClick"
    ></KActionSheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actionChoose: ['onClick1', 'onClick2', 'onClick3']
    };
  },
  methods: {
    showTitle() {
      this.show = true;
    },
    onClick(val) {
      console.log('onClick', val);
    }
  }
};
</script>
