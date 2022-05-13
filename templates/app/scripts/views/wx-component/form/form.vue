<template>
  <div>
    <div class="title">wx-form</div>
    <div class="comp-cnt">
      <wx-form
        @submit="$store.log('[wx-form] submit', $event.detail)"
        @reset="
          wxForm.wxPicker.showText = '美国';
          $store.log('[wx-form] reset');
        "
      >
        <div>
          <wx-input
            class="wx-input"
            name="wx-input"
            value="wx-input"
            placeholder="请输入内容"
          ></wx-input>
        </div>
        <div>
          <wx-textarea
            class="wx-textarea"
            name="wx-textarea"
            value="wx-textarea"
            placeholder="请输入内容"
          ></wx-textarea>
        </div>
        <div>
          <wx-switch name="wx-switch" :checked="true"></wx-switch>wx-switch
        </div>
        <div>
          <wx-slider name="wx-slider" value="77" :show-value="true"></wx-slider>
        </div>
        <wx-checkbox-group class="wx-checkbox-group">
          <div>
            <wx-checkbox
              name="wx-checkbox"
              :checked="true"
              value="中国"
            ></wx-checkbox
            >中国
          </div>
          <div>
            <wx-checkbox name="wx-checkbox" value="美国"></wx-checkbox>美国
          </div>
        </wx-checkbox-group>
        <wx-radio-group class="wx-radio-group">
          <div>
            <wx-radio name="wx-radio" :checked="true" value="男"></wx-radio>男
          </div>
          <div><wx-radio name="wx-radio" value="女"></wx-radio>女</div>
        </wx-radio-group>
        <div>
          <wx-picker
            class="wx-picker"
            name="wx-picker"
            :range="wxForm.wxPicker.range"
            :value="wxForm.wxPicker.value"
            @change="
              wxForm.wxPicker.showText =
                wxForm.wxPicker.range[+$event.detail.value]
            "
          >
            <div>{{ wxForm.wxPicker.showText }}</div>
          </wx-picker>
        </div>
        <div>
          <wx-picker-view
            class="wx-picker-view"
            name="wx-picker-view"
            indicator-style="height: 50px;"
            :value="wxForm.wxPickerView.value"
          >
            <wx-picker-view-column class="wx-picker-view-column">
              <div
                v-for="item in wxForm.wxPickerView.year"
                :key="item"
                class="item"
              >
                {{ item }}年
              </div>
            </wx-picker-view-column>
            <wx-picker-view-column class="wx-picker-view-column">
              <div
                v-for="item in wxForm.wxPickerView.month"
                :key="item"
                class="item"
              >
                {{ item }}月
              </div>
            </wx-picker-view-column>
            <wx-picker-view-column class="wx-picker-view-column">
              <div
                v-for="item in wxForm.wxPickerView.date"
                :key="item"
                class="item"
              >
                {{ item }}日
              </div>
            </wx-picker-view-column>
          </wx-picker-view>
        </div>
        <wx-button class="wx-button" type="primary" form-type="submit">
          submit
        </wx-button>
        <wx-button class="wx-button" form-type="reset">reset</wx-button>
      </wx-form>
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
      wxForm: {
        wxPicker: {
          range: ['美国', '中国', '巴西', '日本'],
          value: 1,
          showText: '中国'
        },
        wxPickerView: {
          value: [9999, 1, 1],
          year: wxPickerViewYear,
          month: wxPickerViewMonth,
          date: wxPickerViewDate
        }
      }
    };
  }
};
</script>
