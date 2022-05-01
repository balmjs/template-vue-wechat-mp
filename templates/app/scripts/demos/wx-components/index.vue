<template>
  <div v-if="isMP" class="page--wx-demos">
    <template v-if="isMP">
      <rich-text :content="html"></rich-text>

      <div>
        <router-link :to="{ name: 'sub' }">router sub page</router-link>
        <a href="/sub/home" target="_blank">link sub page</a>
        <KButton @click="$store.onClickJump('/sub/home')">
          Jump sub page
        </KButton>
        <KButton @click="$store.onClickOpen('/sub/home')">
          Open sub page
        </KButton>
      </div>
    </template>
    <div v-else>未开启自定义组件配置</div>
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
