<template>
  <KCells title="表单组标题">
    <KInput
      v-model="formData.wechatId"
      label="微信号"
      placeholder="填写本人微信号"
    ></KInput>
    <KInput
      v-model="formData.nickName"
      label="昵称"
      placeholder="填写本人微信号的昵称"
    ></KInput>
    <KInput
      v-model="formData.phone"
      label="联系电话"
      placeholder="填写绑定的电话号码"
    ></KInput>
    <div class="weui-form__tips-area">
      <p class="weui-form__tips">表单页提示，居中对齐</p>
    </div>
    <KButton type="primary" :disabled="disabled">确定</KButton>
  </KCells>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        wechatId: '',
        nickName: '',
        phone: ''
      }
    };
  },
  computed: {
    disabled() {
      return !(
        this.formData.wechatId &&
        this.formData.nickName &&
        this.formData.phone
      );
    }
  }
};
</script>
