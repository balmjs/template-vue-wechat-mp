<template>
  <div>
    <KSlider />
    <KSlider v-model="value" :show-value="true" />
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
