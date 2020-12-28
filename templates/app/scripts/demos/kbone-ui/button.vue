<template>
  <KButtonArea>
    <KButton type="primary">页面主要操作</KButton>
    <KButton type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">
      getUserInfo
    </KButton>
    <KButton type="primary" :loading="true">BalmJS</KButton>
    <KButton type="primary" :disabled="true">小程序开发</KButton>
    <KButton>页面次要操作</KButton>
    <KButton type="warn">警告类操作</KButton>
    <KButton type="warn" :loading="true">警告类操作</KButton>
    <KButton type="warn" :disabled="true">警告类操作</KButton>
  </KButtonArea>
</template>

<script>
export default {
  methods: {
    getUserInfo(userInfo) {
      console.log('getUserInfo', userInfo);
    }
  }
};
</script>
