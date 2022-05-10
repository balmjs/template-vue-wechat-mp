Component({
  properties: {
    hiddenGoBack: {
      type: Boolean,
      value: true
    },
    title: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#fff'
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
    topAppBarHeight: 0,
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
  lifetimes: {
    ready: function() {
      if (this.data.contentOffset) {
        this.data.topAppBarHeight = this.data.statusBarHeight + 44;
      }

      this.triggerEvent('ready', {
        height: this.data.topAppBarHeight
      });
    }
  },
  methods: {
    goBack: function() {
      this.triggerEvent('back');
    }
  }
});
