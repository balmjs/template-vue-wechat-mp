<template>
  <KView class="page interaction js_show">
    <KView class="page__hd">
      <h1 class="page__title">Interaction</h1>
      <p class="page__desc">小程序样式交互 API</p>
    </KView>
    <KView class="page__hd">
      <KButtonArea direction="horizontal">
        <KButton
          size="mini"
          type="primary"
          style="font-size: 14px"
          @click="openToast"
        >
          showToast
        </KButton>
        <KButton
          size="mini"
          type="primary"
          style="font-size: 14px"
          @click="hideToast"
        >
          hideToast
        </KButton>
      </KButtonArea>
      <KButton type="primary" @click="openCoverToast">toast cover</KButton>
      <KButton type="primary" @click="showModal">showModal</KButton>
      <KButtonArea direction="horizontal">
        <KButton @click="showLoading">showLoading</KButton>
        <KButton @click="hideLoading">hideLoading</KButton>
      </KButtonArea>
      <KButton type="primary" @click="showActionSheet">
        showActionSheet
      </KButton>
    </KView>
  </KView>
</template>

<script>
export default {
  name: 'Interaction',
  methods: {
    openToast() {
      this.$api.showToast({
        title: 'Hello BalmJS',
        icon: 'success'
      });
    },
    openCoverToast() {
      this.$api.showToast({
        title: 'Hello BalmJS',
        icon: 'loading',
        mask: true
      });
    },
    showModal() {
      this.$api.showModal({
        title: '微信小程序',
        content: 'Hello BalmJS',
        cancelText: '取消',
        confirmText: '确认'
      });
    },
    hideToast() {
      this.$api.hideToast();
    },
    showLoading() {
      this.$api.showLoading({
        title: 'loading 状态'
      });
    },
    hideLoading() {
      this.$api.hideLoading();
    },
    showActionSheet() {
      this.$api
        .showActionSheet({
          itemList: ['1', '2', '3']
        })
        .then((res) => {
          console.log(res.tapIndex);
        })
        .catch(() => {
          console.log('取消触发');
        });
    }
  }
};
</script>
