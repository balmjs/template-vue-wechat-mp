<template>
  <div v-if="isMP" class="page--wx-demos">
    <div>（开启）自定义组件</div>
    <rich-text :content="html"></rich-text>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html:
        '<div class="div_class" style="line-height: 60px; color: red;">Hello rich text</div>'
    };
  }
};
</script>
