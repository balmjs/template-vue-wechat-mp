<template>
  <div>
    <KSlider></KSlider>
    <KSlider v-model="value" show-value></KSlider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 50
    };
  }
};
</script>
