<template>
  <div v-if="isMP" class="page--wx-demos">
    <div>（开启）自定义组件</div>
    <rich-text :content="html"></rich-text>

    <div>
      <a href="/sub/home" target="_blank">link sub page</a>
      <KButton @click="onClickJump('/sub/home')">jump sub page</KButton>
      <KButton @click="onClickOpen('/sub/home')">open sub page</KButton>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: '<div class="div_class" style="line-height: 60px; color: red;">Hello rich text</div>'
    };
  }
};
</script>
