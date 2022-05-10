<template>
  <div>
    <div class="title">mp-actionsheet</div>
    <div class="comp-cnt">
      <wx-button class="wx-button opr-button" @tap="mpActionSheet.show = true">
        模拟 ActionSheet
      </wx-button>
      <mp-actionsheet
        :show="mpActionSheet.show"
        :actions="mpActionSheet.groups"
        title="这是一个标题，可以为一行或者两行。"
        @close="mpActionSheet.show = false"
        @actiontap="$store.log('[mp-actionsheet] action tap', $event.detail)"
      ></mp-actionsheet>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpActionSheet: {
        show: false,
        groups: [
          { text: '示例菜单', value: 1 },
          { text: '示例菜单', value: 2 },
          { text: '负向菜单', type: 'warn', value: 3 }
        ]
      }
    };
  }
};
</script>
