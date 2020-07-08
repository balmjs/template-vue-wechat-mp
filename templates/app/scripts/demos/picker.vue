<template>
  <KPickerView
    v-model="index"
    indicator-style="height: 50px;"
    style="width: 100%; height: 300px;"
    @change="changeIndex"
  >
    <KPickerViewColumn>
      <KView v-for="(item, index) in singleData" style="line-height: 50px;" :key="index">{{ item }}</KView>
    </KPickerViewColumn>
  </KPickerView>
</template>

<script>
export default {
  data() {
    return {
      singleData: ['A', 'B', 'C', 'D'],
      index: [0]
    };
  },
  methods: {
    changeIndex(val) {
      console.log('changeIndex', val[0]);
    }
  }
};
</script>
