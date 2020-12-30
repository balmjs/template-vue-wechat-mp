<template>
  <div>
    <KCells title="表单组标题">
      <KInput
        v-model="formData.wechatId"
        label="微信号"
        placeholder="填写本人微信号"
        :focus="false"
      ></KInput>
      <KInput
        v-model="formData.nickName"
        label="昵称"
        placeholder="填写本人微信号的昵称"
        :focus="false"
      ></KInput>
      <KInput
        v-model="formData.phone"
        label="联系电话"
        placeholder="填写绑定的电话号码"
        :focus="false"
      ></KInput>

      <div class="weui-form__tips-area">
        <p class="weui-form__tips">
          注意：KInput在小程序中可能会触发键盘自动聚焦而导致返回上一页时引发KInput的bug，建议使用:focus="false"临时解决
        </p>
      </div>

      <KButton type="primary" :disabled="disabled">确定</KButton>
    </KCells>
  </div>
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
