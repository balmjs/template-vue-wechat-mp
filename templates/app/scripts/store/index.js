import demo from './modules/demo';

const DEFAULT_TABBAR_ICON = 'https://mp.balmjs.com/img/icon_tabbar.png';

export default {
  mixins: [demo],
  data() {
    return {
      DEFAULT_TABBAR_ICON,
      tabbarIndex: 0,
      tabbarItems: [
        {
          text: '首页',
          iconPath: DEFAULT_TABBAR_ICON,
          selectedIconPath: DEFAULT_TABBAR_ICON,
          url: '/main'
        },
        {
          text: '组件',
          iconPath: DEFAULT_TABBAR_ICON,
          selectedIconPath: DEFAULT_TABBAR_ICON,
          url: '/wx-component'
        },
        {
          text: '扩展能力',
          iconPath: DEFAULT_TABBAR_ICON,
          selectedIconPath: DEFAULT_TABBAR_ICON,
          url: '/mp-component'
        },
        {
          text: '接口',
          iconPath: DEFAULT_TABBAR_ICON,
          selectedIconPath: DEFAULT_TABBAR_ICON,
          url: '/wx-api'
        },
        {
          text: '云开发',
          iconPath: DEFAULT_TABBAR_ICON,
          selectedIconPath: DEFAULT_TABBAR_ICON,
          url: '/wx-cloud'
        }
      ],
      subNavIndex: 0
    };
  },
  methods: {
    log(...args) {
      console.log.apply(console, args);
    },
    onClickJump(url) {
      window.location.href = url;
    },
    onClickOpen(url) {
      window.open(url);
    },
    bufferToBase64(arrayBuffer) {
      return `data:image/png;base64,${this.$api.arrayBufferToBase64(
        arrayBuffer
      )}`;
    }
  }
};
