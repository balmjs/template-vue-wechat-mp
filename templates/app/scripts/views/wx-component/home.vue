<template>
  <div>
    <h1>小程序组件</h1>
    <p v-if="!isMP">
      <a
        href="https://developers.weixin.qq.com/miniprogram/dev/component/"
        target="_blank"
        ref="noopener"
      >
        小程序组件文档
      </a>
    </p>
    <sub-nav :types="navTypes" :items="navItems"></sub-nav>
  </div>
</template>

<script>
import { wxSubRoutes } from '@/routes/modules/wx-component';

const navTypes = {
  view: '视图容器',
  basic: '基础内容',
  form: '表单组件',
  navigation: '导航',
  media: '媒体组件',
  map: '地图',
  canvas: '画布',
  open: '开放能力',
  a11y: '无障碍访问'
};

export default {
  data() {
    return {
      navTypes
    };
  },
  computed: {
    navItems() {
      return wxSubRoutes.map(({ path, name, children }) => {
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
