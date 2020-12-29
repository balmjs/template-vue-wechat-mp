<template>
  <div>
    <KCells title="表单报错">
      <KInput
        v-model="cardNumber"
        label="卡号"
        placeholder="请输入8位数卡号"
        clearable
      ></KInput>
    </KCells>
    <KCells title="表单只读、置灰">
      <KInput v-model="email" label="EMail" readonly></KInput>
      <KInput v-model="wechatId" label="微信号" disabled></KInput>
    </KCells>
    <KButton type="primary" :disabled="disabled" @click="onConfirm"
      >确定</KButton
    >

    <KToast v-model="showSuccess" type="success" :duration="3000">
      已完成
    </KToast>
    <KToptips v-model="showError" type="error" :duration="1000">
      错误提示
    </KToptips>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: '',
      email: '1234567',
      wechatId: 'WeUI',
      showSuccess: false,
      showError: false
    };
  },
  computed: {
    disabled() {
      return !this.cardNumber;
    }
  },
  methods: {
    onConfirm() {
      if (this.cardNumber.length === 8) {
        this.showSuccess = true;
      } else {
        this.showError = true;
      }
    }
  }
};
</script>
