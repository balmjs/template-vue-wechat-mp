<template>
  <div>
    <wx-picker-view
      class="wx-picker-view"
      indicator-style="height: 50px;"
      :value="wxPickerView.value"
      style="height: 300px"
      @change="$store.log('[wx-picker-view] change', $event.detail)"
      @pickstart="$store.log('[wx-picker-view] pickstart', $event)"
      @pickend="$store.log('[wx-picker-view] pickend', $event)"
    >
      <wx-picker-view-column class="wx-picker-view-column">
        <div v-for="item in wxPickerView.year" :key="item" class="item">
          {{ item }}年
        </div>
      </wx-picker-view-column>
      <wx-picker-view-column class="wx-picker-view-column">
        <div v-for="item in wxPickerView.month" :key="item" class="item">
          {{ item }}月
        </div>
      </wx-picker-view-column>
      <wx-picker-view-column class="wx-picker-view-column">
        <div v-for="item in wxPickerView.date" :key="item" class="item">
          {{ item }}日
        </div>
      </wx-picker-view-column>
      <wx-picker-view-column class="wx-picker-view-column">
        <div class="icon-cnt">
          <img
            class="icon"
            src="data:image/png;base64,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"
          />
        </div>
        <div class="icon-cnt">
          <img
            class="icon"
            src="data:image/png;base64,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"
          />
        </div>
      </wx-picker-view-column>
    </wx-picker-view>
    <div class="opr-cnt">
      <wx-button class="wx-button opr-button" @click="onUpdateWxPickerView">
        更新值（随机）
      </wx-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const now = new Date();
    // wx-picker-view
    const wxPickerViewYear = [];
    const wxPickerViewMonth = [];
    const wxPickerViewDate = [];
    for (let i = 1990; i <= now.getFullYear(); i++) wxPickerViewYear.push(i);
    for (let i = 1; i <= 12; i++) wxPickerViewMonth.push(i);
    for (let i = 1; i <= 31; i++) wxPickerViewDate.push(i);

    return {
      wxPickerView: {
        value: [9999, 1, 1],
        year: wxPickerViewYear,
        month: wxPickerViewMonth,
        date: wxPickerViewDate
      }
    };
  },
  methods: {
    onUpdateWxPickerView() {
      const now = new Date();
      const year = Math.floor(Math.random() * (now.getFullYear() + 1 - 1990));
      const month = Math.floor(Math.random() * 12);
      const date = Math.floor(Math.random() * 31);
      const daytime = Math.random() >= 0.5 ? 1 : 0;
      console.log('[wx-picker-view] will update value ->', [
        year,
        month,
        date,
        daytime
      ]);
      this.wxPickerView.value = [year, month, date, daytime];
    }
  }
};
</script>
