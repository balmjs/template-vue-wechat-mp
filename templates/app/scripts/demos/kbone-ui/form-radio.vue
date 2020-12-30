<template>
  <KRadioGroup v-model="checkedValue">
    <KRadio :value="1">cell standard 1</KRadio>
    <KRadio :value="2">cell standard 2</KRadio>
  </KRadioGroup>
</template>

<script>
export default {
  data() {
    return {
      checkedValue: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.checkedValue = 2;
    }, 1);
  }
};
</script>
