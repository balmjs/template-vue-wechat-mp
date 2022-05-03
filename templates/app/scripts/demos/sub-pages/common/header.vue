<template>
  <div class="header">
    <h1>Hello {{ $store.sitename }}</h1>

    <div>
      <KFlex>
        <KFlexItem>
          <KView class="placeholder">
            <a href="/main/demos/wx" target="_blank">link main page</a>
          </KView>
        </KFlexItem>
      </KFlex>

      <KButton @click="$store.onClickJump('/main/demos/wx')">
        Jump main page
      </KButton>
      <KButton @click="$store.onClickOpen('/main/demos/wx')">
        Open main page
      </KButton>
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
