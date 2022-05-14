<template>
  <div>
    <div class="title">mp-toptips</div>
    <div class="comp-cnt">
      <mp-toptips
        :msg="mpToptips.message"
        :type="mpToptips.type"
        :show="mpToptips.showTopTips"
        delay="3000"
        @hide="mpToptips.showTopTips = false"
      ></mp-toptips>
      <div class="opr-cnt">
        <wx-input
          class="weui-input"
          placeholder="输入文本"
          @input="mpToptips.value = $event.detail.value"
        />
      </div>
      <wx-button class="weui-btn wx-button" type="primary" @tap="showMpToptips">
        确认
      </wx-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpToptips: {
        value: '',
        showTopTips: false,
        message: '请输入文本',
        type: 'info'
      }
    };
  },
  methods: {
    showMpToptips() {
      if (this.mpToptips.value) {
        this.mpToptips.showTopTips = true;
        this.mpToptips.message = this.mpToptips.value;
        this.mpToptips.type = 'success';
      } else {
        this.mpToptips.showTopTips = true;
        this.mpToptips.message = '缺少内容';
        this.mpToptips.type = 'error';
      }
    }
  }
};
</script>
