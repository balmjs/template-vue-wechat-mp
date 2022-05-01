<template>
  <div class="header">
    <h1>Hello {{ $store.sitename }}</h1>

    <div>
      <a href="/wx" target="_blank">link main page</a>
      <KButton @click="onClickJump('/wx')">jump main page</KButton>
      <KButton @click="onClickOpen('/wx')">open main page</KButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  mounted() {
    this.$store.sitename = 'BalmJS';
  }
};
</script>
