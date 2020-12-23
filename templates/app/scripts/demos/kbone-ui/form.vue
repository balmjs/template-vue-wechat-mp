<template>
  <div>
    <KCells title="表单输入">
      <KInput
        label="卡号"
        @change="inputChange"
        v-model="inputCardValue"
        placeholder="填写本人卡号"
        clearable
      ></KInput>
      <KInput
        label="昵称"
        @change="inputChange"
        v-model="inputNickName"
        placeholder="填写信号的昵称"
        clearable
      ></KInput>
    </KCells>
    <KCells title="Checkbox">
      <KCheckboxGroup @change="handleChange" v-model="checkboxGrpValues">
        <KCheckbox value="BalmJS">BalmJS</KCheckbox>
        <KCheckbox value="小程序开发">小程序开发</KCheckbox>
      </KCheckboxGroup>
    </KCells>
    <KCells title="Switch">
      <KSwitch v-model="switchItem" label="Switch文本" />
    </KCells>
    <KCells title="Radio">
      <KRadioGroup @change="raidoChange" v-model="radioValue">
        <KRadio :value="1">微信</KRadio>
        <KRadio :value="2">微信支付</KRadio>
        <KRadio :value="3">小程序</KRadio>
      </KRadioGroup>
    </KCells>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxGrpValues: [],
      switchItem: false,
      radioValue: 1,
      inputCardValue: '',
      inputNickName: ''
    };
  },
  methods: {
    handleChange(val) {
      console.log('handleChange', val);
    },
    raidoChange(val) {
      console.log('raidoChange', val);
    },
    inputChange(val) {
      console.log('inputChange', val);
    }
  }
};
</script>
