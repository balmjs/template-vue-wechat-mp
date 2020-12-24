<template>
  <div class="header">
    <p>Hello {{ $store.sitename }}</p>
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
