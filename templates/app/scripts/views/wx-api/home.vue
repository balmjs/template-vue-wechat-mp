<template>
  <div>
    <h1>小程序接口</h1>
    <p v-if="!isMP">
      <a
        href="https://developers.weixin.qq.com/miniprogram/dev/api"
        target="_blank"
        ref="noopener"
      >
        小程序API文档
      </a>
    </p>
    <sub-nav v-if="isMP || DEBUG" :types="navTypes" :items="navItems"></sub-nav>
    <p v-else>请至“微信开发者工具”中测试 API</p>
  </div>
</template>

<script>
import { apiSubRoutes } from '@/routes/modules/wx-api';

const DEBUG = false;
const navTypes = {
  open: '开放接口',
  network: '网络',
  media: '媒体',
  location: '位置'
};

export default {
  data() {
    return {
      DEBUG,
      navTypes
    };
  },
  computed: {
    navItems() {
      return apiSubRoutes.map(({ path, name, children }) => {
        return {
          path,
          name,
          children // : children.map((path, name) => ({ path, name }))
        };
      });
    }
  }
};
</script>
