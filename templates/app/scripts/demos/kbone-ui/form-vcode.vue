<template>
  <div>
    <KCells title="问题描述">
      <KView class="weui-cell">
        <KView class="weui-cell__hd">
          <label class="weui-label">手机号</label>
        </KView>
        <KView class="weui-cell__bd">
          <input v-model="phone" class="weui-input" />
        </KView>
        <KView class="weui-cell__ft">
          <KIcon type="info"></KIcon>
        </KView>
      </KView>
      <KView class="weui-cell">
        <KView class="weui-cell__hd">
          <label class="weui-label">验证码</label>
        </KView>
        <KView class="weui-cell__bd">
          <input v-model="vcode" class="weui-input" placeholder="输入验证码" />
        </KView>
        <KView class="weui-cell__ft">
          <KButton size="mini">获取验证码</KButton>
        </KView>
      </KView>
    </KCells>
    <div class="weui-cells__tips">
      <a class="weui-link" href="javascript:">收不到验证码</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '12345678907',
      vcode: ''
    };
  }
};
</script>
