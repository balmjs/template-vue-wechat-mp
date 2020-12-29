<template>
  <div>
    <KSwitch v-model="switchValue1" label="标题文字"></KSwitch>
    <KSwitch v-model="switchValue2" label="兼容IE Edge的版本"></KSwitch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchValue1: false,
      switchValue2: true
    };
  }
};
</script>
