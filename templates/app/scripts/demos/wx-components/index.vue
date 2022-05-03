<template>
  <div class="page--wx-demos">
    <template v-if="isMP">
      <rich-text :content="html"></rich-text>
    </template>
    <div v-else>请至“微信开发者工具”中测试自定义组件</div>

    <!-- <div>Count: {{ $globalStore.count }}</div> -->

    <div>
      <KFlex>
        <KFlexItem>
          <KView class="placeholder">
            <a href="/sub/home" target="_blank">link sub page</a>
          </KView>
        </KFlexItem>
      </KFlex>

      <KButton @click="$store.onClickJump('/sub/home')">
        Jump sub page
      </KButton>
      <KButton @click="$store.onClickOpen('/sub/home')">
        Open sub page
      </KButton>
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
