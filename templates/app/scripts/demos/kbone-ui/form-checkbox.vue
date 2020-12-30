<template>
  <div>
    <KCheckboxGroup v-model="checkedValue" @change="handleChange">
      <KCheckbox value="A">standard is dealt for u.</KCheckbox>
      <KCheckbox value="B">standard is dealicient for u.</KCheckbox>
    </KCheckboxGroup>
    <div class="weui-form__tips-area">
      <p class="weui-form__tips">注意：KCheckbox 在小程序中动态赋值有bug</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedValue: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.checkedValue = ['A'];
    }, 1);
  }
};
</script>
