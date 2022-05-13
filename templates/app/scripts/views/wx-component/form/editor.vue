<template>
  <div>
    <ui-editor
      placeholder="开始输入..."
      @ready="onReady"
      @input="onInput"
    ></ui-editor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    };
  },
  methods: {
    onReady({ detail }) {
      console.log('onReady', detail.setContents);
      detail.setContents('<p><span>xxx</span></p>');
    },
    onInput({ detail }) {
      console.log('onInput', detail.html);
    }
  }
};
</script>
