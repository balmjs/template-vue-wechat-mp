<template>
  <div>
    <div class="title">mp-tabbar</div>
    <div class="comp-cnt">
      <mp-tabbar
        v-if="mpTabbar.show"
        style="
          position: fixed;
          bottom: 0;
          width: 100%;
          left: 0;
          right: 0;
          z-index: 501;
        "
        :list="mpTabbar.list"
        @change="$store.log('[mp-tabbar] change', $event.detail)"
      ></mp-tabbar>
      <div class="opr-cnt">
        <div class="opr-label">显示/隐藏</div>
        <wx-switch @change="mpTabbar.show = $event.detail.value"></wx-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpTabbar: {
        show: false,
        list: [
          {
            text: '微信',
            iconPath: this.$store.DEFAULT_TABBAR_ICON,
            selectedIconPath: this.$store.DEFAULT_TABBAR_ICON,
            badge: '8'
          },
          {
            text: '通讯录',
            iconPath: this.$store.DEFAULT_TABBAR_ICON,
            selectedIconPath: this.$store.DEFAULT_TABBAR_ICON
          },
          {
            text: '发现',
            iconPath: this.$store.DEFAULT_TABBAR_ICON,
            selectedIconPath: this.$store.DEFAULT_TABBAR_ICON,
            dot: true
          },
          {
            text: '我',
            iconPath: this.$store.DEFAULT_TABBAR_ICON,
            selectedIconPath: this.$store.DEFAULT_TABBAR_ICON
          }
        ]
      }
    };
  }
};
</script>
