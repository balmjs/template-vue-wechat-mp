<template>
  <div>
    <wx-picker
      class="wx-picker"
      :range="wxPicker.range1"
      :value="wxPicker.value1"
      @change="wxPicker.showText1 = wxPicker.range1[+$event.detail.value]"
      @cancel="$store.log('[wx-picker] cancel', $event)"
    >
      <div>普通选择器：{{ wxPicker.showText1 }}</div>
    </wx-picker>
    <wx-picker
      class="wx-picker"
      header-text="selector"
      range-key="name"
      :range="wxPicker.range2"
      :value="wxPicker.value2"
      @change="wxPicker.showText2 = wxPicker.range2[+$event.detail.value].name"
      @cancel="$store.log('[wx-picker] cancel', $event)"
    >
      <div>普通选择器2：{{ wxPicker.showText2 }}</div>
    </wx-picker>
    <wx-picker
      class="wx-picker"
      mode="multiSelector"
      :range="wxPicker.range3"
      :value="wxPicker.value3"
      @change="
        wxPicker.showText3 = `${
          wxPicker.range3[0][+$event.detail.value[0]]
        } - ${wxPicker.range3[1][+$event.detail.value[1]]} - ${
          wxPicker.range3[2][+$event.detail.value[2]]
        }`
      "
      @cancel="$store.log('[wx-picker] cancel', $event)"
      @columnchange="onWxpicker3ColumnChange"
    >
      <div>多列选择器：{{ wxPicker.showText3 }}</div>
    </wx-picker>
    <wx-picker
      class="wx-picker"
      mode="multiSelector"
      range-key="name"
      header-text="multiSelector"
      :range="wxPicker.range4"
      :value="wxPicker.value4"
      @change="
        wxPicker.showText4 = `${
          wxPicker.range4[0][+$event.detail.value[0]].name
        } - ${wxPicker.range4[1][+$event.detail.value[1]].name}`
      "
      @cancel="$store.log('[wx-picker] cancel', $event)"
      @columnchange="onWxpicker4ColumnChange"
    >
      <div>多列选择器2：{{ wxPicker.showText4 }}</div>
    </wx-picker>
    <wx-picker
      class="wx-picker"
      mode="time"
      start="09:01"
      end="21:01"
      :value="wxPicker.value5"
      @change="wxPicker.value5 = $event.detail.value"
      @cancel="$store.log('[wx-picker] cancel', $event)"
    >
      <div>时间选择器：{{ wxPicker.value5 }}</div>
    </wx-picker>
    <wx-picker
      class="wx-picker"
      mode="date"
      start="2015-09-01"
      end="2020-09-01"
      :value="wxPicker.value6"
      @change="wxPicker.value6 = $event.detail.value"
      @cancel="$store.log('[wx-picker] cancel', $event)"
    >
      <div>日期选择器：{{ wxPicker.value6 }}</div>
    </wx-picker>
    <wx-picker
      class="wx-picker"
      mode="date"
      start="2015-09-01"
      end="2020-09-01"
      fields="month"
      :value="wxPicker.value7"
      @change="wxPicker.value7 = $event.detail.value"
      @cancel="$store.log('[wx-picker] cancel', $event)"
    >
      <div>日期选择器2：{{ wxPicker.value7 }}</div>
    </wx-picker>
    <wx-picker
      class="wx-picker"
      mode="date"
      start="2015-09-01"
      end="2020-09-01"
      fields="year"
      :value="wxPicker.value8"
      @change="wxPicker.value8 = $event.detail.value"
      @cancel="$store.log('[wx-picker] cancel', $event)"
    >
      <div>日期选择器2：{{ wxPicker.value8 }}</div>
    </wx-picker>
    <wx-picker
      class="wx-picker"
      mode="region"
      :value="wxPicker.value9"
      @change="wxPicker.showText9 = $event.detail.value.join('-')"
      @cancel="$store.log('[wx-picker] cancel', $event)"
    >
      <div>省市选择器：{{ wxPicker.showText9 }}</div>
    </wx-picker>
    <wx-picker
      class="wx-picker"
      mode="region"
      custom-item="全部"
      :value="wxPicker.value10"
      @change="wxPicker.showText10 = $event.detail.value.join('-')"
      @cancel="$store.log('[wx-picker] cancel', $event)"
    >
      <div>省市选择器2：{{ wxPicker.showText10 }}</div>
    </wx-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxPicker: {
        range1: ['美国', '中国', '巴西', '日本'],
        value1: 1,
        showText1: '中国',
        range2: [
          { name: '美国' },
          { name: '中国' },
          { name: '巴西' },
          { name: '日本' }
        ],
        value2: 1,
        showText2: '中国',
        range3: [
          ['无脊柱动物', '脊柱动物'],
          ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
          ['猪肉绦虫', '吸血虫']
        ],
        value3: [0, 0, 0],
        showText3: '无脊柱动物 - 扁性动物 - 猪肉绦虫',
        range4: [
          [{ name: '国家' }, { name: '城市' }],
          [{ name: '中国' }, { name: '日本' }]
        ],
        value4: [0, 0],
        showText4: '国家 - 中国',
        value5: '12:01',
        value6: '2016-09-01',
        value7: '2016-09',
        value8: '2016',
        value9: ['广东省', '广州市', '海珠区'],
        showText9: '广东省-广州市-海珠区',
        value10: ['广东省', '广州市', '海珠区'],
        showText10: '广东省-广州市-海珠区'
      }
    };
  },
  methods: {
    onWxpicker3ColumnChange(evt) {
      const value = JSON.parse(JSON.stringify(this.wxPicker.value3)); // 深拷贝
      const range = JSON.parse(JSON.stringify(this.wxPicker.range3)); // 深拷贝
      value[evt.detail.column] = +evt.detail.value;
      switch (evt.detail.column) {
        case 0:
          switch (value[0]) {
            case 0:
              range[1] = [
                '扁性动物',
                '线形动物',
                '环节动物',
                '软体动物',
                '节肢动物'
              ];
              range[2] = ['猪肉绦虫', '吸血虫'];
              break;
            case 1:
              range[1] = ['鱼', '两栖动物', '爬行动物'];
              range[2] = ['鲫鱼', '带鱼'];
              break;
          }
          value[1] = 0;
          value[2] = 0;
          break;
        case 1:
          switch (value[0]) {
            case 0:
              switch (value[1]) {
                case 0:
                  range[2] = ['猪肉绦虫', '吸血虫'];
                  break;
                case 1:
                  range[2] = ['蛔虫'];
                  break;
                case 2:
                  range[2] = ['蚂蚁', '蚂蟥'];
                  break;
                case 3:
                  range[2] = ['河蚌', '蜗牛', '蛞蝓'];
                  break;
                case 4:
                  range[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                  break;
              }
              break;
            case 1:
              switch (value[1]) {
                case 0:
                  range[2] = ['鲫鱼', '带鱼'];
                  break;
                case 1:
                  range[2] = ['青蛙', '娃娃鱼'];
                  break;
                case 2:
                  range[2] = ['蜥蜴', '龟', '壁虎'];
                  break;
              }
              break;
          }
          value[2] = 0;
          break;
      }
      this.wxPicker.value3 = value;
      this.wxPicker.range3 = range;
    },
    onWxpicker4ColumnChange(evt) {
      const value = JSON.parse(JSON.stringify(this.wxPicker.value4)); // 深拷贝
      const range = JSON.parse(JSON.stringify(this.wxPicker.range4)); // 深拷贝
      value[evt.detail.column] = +evt.detail.value;
      if (evt.detail.column === 0) {
        if (value[0] === 0) {
          range[1] = [{ name: '中国' }, { name: '日本' }];
        } else if (value[0] === 1) {
          range[1] = [{ name: '北京' }, { name: '东京' }];
        }
        value[1] = 0;
      }
      this.wxPicker.value4 = value;
      this.wxPicker.range4 = range;
    }
  }
};
</script>
