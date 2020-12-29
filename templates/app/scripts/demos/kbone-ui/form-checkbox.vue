<template>
  <KCheckboxGroup v-model="checkedValue">
    <KCheckbox :value="1">standard is dealt for u.</KCheckbox>
    <KCheckbox :value="2">standard is dealicient for u.</KCheckbox>
  </KCheckboxGroup>
</template>

<script>
export default {
  data() {
    return {
      checkedValue: [1]
    };
  }
};
</script>
