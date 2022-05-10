Component({
  properties: {
    readOnly: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    },
    showImgSize: {
      type: Boolean,
      value: false
    },
    showImgToolbar: {
      type: Boolean,
      value: false
    },
    showImgResize: {
      type: Boolean,
      value: false
    }
  },
  data: {
    editor: null
  },
  methods: {
    onReady() {
      const query = wx.createSelectorQuery();
      query
        .in(this)
        .select('#editor')
        .context((res) => {
          this.setData({
            editor: res.context
          });
        })
        .exec();

      this.triggerEvent('ready', this);
    },
    setContents(value) {
      this.editor.setContents({
        html: value,
        success: () => {
          console.log('setContents success');
        }
      });
    },
    onFocus({ detail }) {
      this.triggerEvent('focus', detail);
    },
    onBlur({ detail }) {
      this.triggerEvent('blur', detail);
    },
    onInput({ detail }) {
      this.triggerEvent('input', detail);
    },
    onStatusChange() {
      // use EditorContext API
      // https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html
      this.triggerEvent('status-change', this.editor);
    }
  }
});
