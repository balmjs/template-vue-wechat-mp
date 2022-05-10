<template>
  <div>
    <div class="title">mp-loading</div>
    <div class="comp-cnt">
      <mp-loading type="circle"></mp-loading>
      <mp-loading
        duration="900"
        ext-class="demo0"
        type="dot-gray"
        :show="mpLoading.show"
        :animated="mpLoading.animated"
      ></mp-loading>
      <mp-loading type="dot-white" ext-class="demo1"></mp-loading>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpLoading: {
        show: true,
        animated: true
      }
    };
  }
};
</script>
