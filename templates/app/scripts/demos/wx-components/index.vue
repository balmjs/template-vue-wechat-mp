<template>
  <div v-if="isMP" class="page--wx-demos">
    <rich-text :content="html" @input="onInput"></rich-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html:
        '<div class="div_class" style="line-height: 60px; color: red;">Hello&nbsp;World!</div>'
    };
  },
  methods: {
    onInput(content) {
      console.log('input', content);
    }
  }
};
</script>
