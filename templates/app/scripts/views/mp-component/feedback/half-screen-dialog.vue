<template>
  <div>
    <div class="title">mp-half-screen-dialog</div>
    <div class="comp-cnt">
      <div class="opr-cnt">
        <wx-button
          class="weui-btn wx-button opr-button"
          type="primary"
          @tap="mpHalfScreenDialog.typeF = true"
        >
          样式一
        </wx-button>
        <wx-button
          class="weui-btn wx-button opr-button"
          type="primary"
          @tap="mpHalfScreenDialog.typeS = true"
        >
          样式二
        </wx-button>
        <wx-button
          class="weui-btn wx-button opr-button"
          type="primary"
          @tap="mpHalfScreenDialog.typeT = true"
        >
          样式三
        </wx-button>
      </div>
      <mp-half-screen-dialog
        :show="mpHalfScreenDialog.typeF"
        @close="mpHalfScreenDialog.typeF = false"
      >
        <div slot="title">测试标题A</div>
        <div slot="desc">这是自定义描述区</div>
        <div slot="footer">
          <wx-button type="default" class="weui-btn weui-btn_default">
            按钮A
          </wx-button>
          <wx-button type="primary" class="weui-btn weui-btn_primary">
            按钮B
          </wx-button>
        </div>
      </mp-half-screen-dialog>
      <mp-half-screen-dialog
        :show="mpHalfScreenDialog.typeS"
        :maskClosable="false"
        title="测试标题B"
        sub-title="测试标题B的副标题"
        desc="辅助描述内容，可根据实际需要安排"
        tips="辅助提示内容，可根据实际需要安排"
        :buttons="mpHalfScreenDialog.buttons"
        @buttontap="log('[mp-half-screen-dialog] buttontap', $event.detail)"
        @close="mpHalfScreenDialog.typeS = false"
      ></mp-half-screen-dialog>
      <mp-half-screen-dialog
        :show="mpHalfScreenDialog.typeT"
        closabled="false"
        @close="mpHalfScreenDialog.typeT = false"
      >
        <div slot="title">测试标题A</div>
        <div slot="desc">这是自定义描述区</div>
        <div slot="footer">
          <wx-button type="default" class="weui-btn weui-btn_default">
            按钮A
          </wx-button>
          <wx-button type="primary" class="weui-btn weui-btn_primary">
            按钮B
          </wx-button>
        </div>
      </mp-half-screen-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpHalfScreenDialog: {
        typeF: false,
        typeS: false,
        typeT: false,
        buttons: [
          {
            type: 'default',
            className: '',
            text: '辅助操作',
            value: 0
          },
          {
            type: 'primary',
            className: '',
            text: '主操作',
            value: 1
          }
        ]
      }
    };
  }
};
</script>
