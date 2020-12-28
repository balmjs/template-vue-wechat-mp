<template>
  <div>
    <KSlider></KSlider>
    <KSlider v-model="value" :show-value="true"></KSlider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 10
    };
  }
};
</script>
