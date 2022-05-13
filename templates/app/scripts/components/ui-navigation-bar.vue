<template>
  <mp-tabbar
    v-show="show"
    class="ui-navigation-bar"
    :list="list"
    :current="current"
    @change="onTabbarChange"
  ></mp-tabbar>
</template>

<script>
import { tabbarDefaultIcon } from '@/config';

const list = [
  {
    name: 'main',
    url: '/main',
    pagePath: '/pages/main/index',
    text: '首页',
    iconPath: tabbarDefaultIcon,
    selectedIconPath: tabbarDefaultIcon
  },
  {
    name: 'wx-component',
    url: '/wx-component',
    pagePath: '/sub1/pages/wx-component/index',
    text: '组件',
    iconPath: tabbarDefaultIcon,
    selectedIconPath: tabbarDefaultIcon
  },
  {
    name: 'mp-component',
    url: '/mp-component',
    pagePath: '/pages/mp-component/index',
    text: '扩展能力',
    iconPath: tabbarDefaultIcon,
    selectedIconPath: tabbarDefaultIcon
  },
  {
    name: 'wx-api',
    url: '/wx-api',
    pagePath: '/sub2/pages/wx-api/index',
    text: '接口',
    iconPath: tabbarDefaultIcon,
    selectedIconPath: tabbarDefaultIcon
  }
  // TODO:
  // {
  //   name: 'wx-cloud',
  //   url: '/wx-cloud',
  //   pagePath: '/sub3/pages/wx-cloud/index',
  //   text: '云开发',
  //   iconPath: tabbarDefaultIcon,
  //   selectedIconPath: tabbarDefaultIcon
  // }
];

export default {
  name: 'UiNavigationBar',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      list,
      current: 0
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const routeName = this.$route.name.split('.')[0];
      this.current = list.findIndex((item) => item.name === routeName);
    },
    onTabbarChange({ detail }) {
      const { index, item } = detail;
      this.current = index;
      this.isMP
        ? this.$store.redirectTo(item.url)
        : this.$router.push({ name: item.name });
    }
  }
};
</script>
