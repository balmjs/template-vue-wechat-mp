<template>
  <KView class="page login js_show">
    <KView class="page__hd">
      <h1 class="page__title">标题</h1>
      <p class="page__desc">标题 api 使用</p>
    </KView>
    <KView class="page__hd">
      <KButton @click="changeTitle"> 更换页面标题 </KButton>
      <KButton @click="toggleAnimation"> 切换标题动画 </KButton>
    </KView>
  </KView>
</template>

<script>
export default {
  name: 'TitleBar',
  data() {
    return {
      titles: ['BalmJS', '微信小程序', 'kbone-api'],
      toggleFlag: undefined
    };
  },
  methods: {
    changeTitle() {
      this.$api.setNavigationBarTitle({
        title: 'Hello BalmJS'
      });
    },
    toggleAnimation() {
      if (this.toggleFlag) {
        this.$api.hideNavigationBarLoading();
        this.toggleFlag = undefined;
      } else {
        this.toggleFlag = this.$api.showNavigationBarLoading();
      }
    }
  }
};
</script>
