Component({
  properties: {
    content: {
      type: String,
      value: ''
    }
  },
  methods: {
    onInput(e) {
      this.setData({
        content: e.detail.value
      });

      this.triggerEvent('input', this.content);
    }
  }
});
