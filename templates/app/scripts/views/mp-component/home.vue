<template>
  <div>
    <h1>扩展能力</h1>
    <p v-if="!isMP">
      <a
        href="https://wechat-miniprogram.github.io/weui/docs"
        target="_blank"
        ref="noopener"
      >
        WeUI组件文档
      </a>
      <span>|</span>
      <a
        href="https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/extended/component-plus"
        target="_blank"
        ref="noopener"
      >
        扩展组件文档
      </a>
    </p>
    <ui-sub-nav :types="navTypes" :items="navItems"></ui-sub-nav>
  </div>
</template>

<script>
import { mpSubRoutes } from '@/routes/modules/mp-component';

const navTypes = {
  form: '表单',
  basic: '基础组件',
  feedback: '操作反馈',
  navigation: '导航相关',
  search: '搜索相关',
  extended: '扩展组件'
};

export default {
  data() {
    return {
      navTypes
    };
  },
  computed: {
    navItems() {
      return mpSubRoutes.map(({ path, name, children }) => {
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
