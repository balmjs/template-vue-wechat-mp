Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    titleColor: {
      type: String,
      value: '#fff'
    },
    hiddenGoBack: {
      type: Boolean,
      value: true
    },
    bgTransparent: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: '#000'
    },
    isLinearGradient: {
      type: Boolean,
      value: true
    },
    sideOrCorner: {
      type: String,
      value: 'to bottom'
    },
    colorStop: {
      type: Array,
      value: []
    },
    // 内容是否偏移（不让导航栏遮挡内容）
    contentOffset: {
      type: Boolean,
      value: true
    }
  },
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    showGoBack: false
  },
  observers: {
    hiddenGoBack: function(value) {
      this.setData({
        showGoBack: !value
      });
    }
  },
  methods: {
    goBack: function() {
      this.triggerEvent('back');
    }
  }
});
