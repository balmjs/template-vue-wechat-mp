<template>
  <KSwiper
    :indicator-dots="indicatorDots"
    :circular="circularFlag"
    :autoplay="autoplay"
    :duration="duration"
    :interval="interval"
  >
    <KSwiperItem v-for="(item, index) in background" :key="index">
      <KView :class="'swiper-item ' + item">{{ item }}</KView>
    </KSwiperItem>
  </KSwiper>
</template>

<script>
export default {
  data() {
    return {
      indicatorDots: true,
      circularFlag: false,
      autoplay: true,
      duration: 500,
      interval: 5000,
      background: ['red', 'green', 'blue']
    };
  }
};
</script>
