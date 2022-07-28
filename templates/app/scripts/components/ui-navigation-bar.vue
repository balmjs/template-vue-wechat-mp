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
const tabbarDefaultIcon = 'https://weui.io/images/icon_tabbar.png';

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
    name: 'sub',
    url: '/sub',
    pagePath: '/sub1/pages/sub/index',
    text: '子页',
    iconPath: tabbarDefaultIcon,
    selectedIconPath: tabbarDefaultIcon
  }
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
  watch: {
    '$route.name'() {
      this.init();
    }
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
