<template>
  <div>
    <h1>小程序接口</h1>
    <p>
      <a
        href="https://developers.weixin.qq.com/miniprogram/dev/api"
        target="_blank"
        ref="noopener"
      >
        小程序API文档
      </a>
    </p>
    <sub-nav :types="navTypes" :items="navItems"></sub-nav>
  </div>
</template>

<script>
import { apiSubRoutes } from '@/routes/modules/wx-api';

const navTypes = {
  open: '开放接口'
};

export default {
  data() {
    return {
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
