<template>
  <div>
    <KButton @click="show = true">单列选择器</KButton>
    <div>Selected: {{ selectedValue }}</div>
    <div v-if="show">
      <div class="weui-mask"></div>
      <div :class="['weui-picker', { 'weui-picker--active': show }]">
        <KPickerView
          v-model="selectedIndex"
          indicator-style="height: 48px;"
          @change="changeIndex"
        >
          <KPickerViewColumn>
            <KView
              v-for="(item, index) in singleData"
              :key="index"
              class="weui-picker__item"
            >
              {{ item }}
            </KView>
          </KPickerViewColumn>
        </KPickerView>
        <KButton type="primary" @click="show = false">确定</KButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      singleData: ['A', 'B', 'C', 'D'],
      selectedIndex: [0],
      selectedValue: 'A'
    };
  },
  methods: {
    changeIndex(val) {
      let index = val[0] || 0;
      this.selectedIndex = [index];
      this.selectedValue = this.singleData[index];
    }
  }
};
</script>
