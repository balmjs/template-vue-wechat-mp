<template>
  <div class="page-home">
    <header class="hero">
      <h1>BalmJS</h1>
      <p>Webapp@vue to WeChat mini program</p>
    </header>

    <div v-html="html"></div>
  </div>
</template>

<script>
import Prism from 'prismjs';

export default {
  data() {
    return {
      html: this.readme
    };
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll();
    });
  }
};
</script>
