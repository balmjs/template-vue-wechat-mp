<template>
  <div>
    <div class="title">mp-dialog</div>
    <div class="comp-cnt">
      <wx-button
        class="weui-btn wx-button"
        type="default"
        @click="mpDialog.dialogShow = true"
      >
        确认取消按钮
      </wx-button>
      <wx-button
        class="weui-btn wx-button"
        type="default"
        @click="mpDialog.showOneButtonDialog = true"
      >
        只有确认按钮
      </wx-button>
      <mp-dialog
        title="test"
        :show="mpDialog.dialogShow"
        @buttontap="mpDialog.dialogShow = false"
        :buttons="mpDialog.buttons"
      >
        <div>test content</div>
      </mp-dialog>
      <mp-dialog
        title="test1"
        :show="mpDialog.showOneButtonDialog"
        @buttontap="mpDialog.showOneButtonDialog = false"
        :buttons="mpDialog.oneButton"
      >
        <div>test content1</div>
      </mp-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpDialog: {
        dialogShow: false,
        showOneButtonDialog: false,
        buttons: [{ text: '取消' }, { text: '确定' }],
        oneButton: [{ text: '确定' }] // 也支持传 json 串，用于对付某些会将属性值转成字符串的 Web 框架
      }
    };
  }
};
</script>
