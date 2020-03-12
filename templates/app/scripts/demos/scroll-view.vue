<template>
  <KScrollView
    :scroll-top="scrollTop"
    scroll-y
    scroll-with-animation
    style="height: 100px"
    @scroll="scroll"
    @scrolltoupper="scrollToUpper"
    @scrolltolower="scrollToLower"
  >
    <KView
      style="height: 100%; background: green; text-align: center; line-height: 100px"
      >纵向滚动</KView
    >
    <KView
      style="height: 100%; background: cyan; text-align: center; line-height: 100px"
      >纵向滚动</KView
    >
    <KView
      style="height: 100%; background: pink; text-align: center; line-height: 100px"
      >纵向滚动</KView
    >
  </KScrollView>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: '0'
    };
  },
  methods: {
    scroll({ detail }) {
      // console.log('scroll', detail);
      this.scrollTop = `${detail.scrollTop}px`;
    },
    scrollToUpper() {
      console.log('scrollToUpper');
    },
    scrollToLower() {
      console.log('scrollToLower');
    }
  }
};
</script>
