<template>
  <div :class="['container', `${routeEntry}-container`, { 'is-mp': isMP }]">
    <!-- <template v-if="isMP">
      <top-app-bar
        title="BalmJS - main page"
        :hiddenGoBack="hiddenGoBack"
        bgColor="#9c27b0"
        :colorStop="['#9c27b0', '#4a148c']"
        @ready="onReady"
        @back="goBack"
      ></top-app-bar>
    </template> -->

    <mp-navigation-bar
      back="false"
      :background="color.bgColor"
      :color="color.frontColor"
      :loading="isLoading"
      animated="true"
      show="true"
      style="z-index: 0"
    >
      <span slot="left">
        <mp-icon
          v-if="$route.name !== 'main'"
          icon="back"
          size="12"
          @click="onNavBack"
        ></mp-icon>
      </span>
      <span slot="center">{{ title }}</span>
    </mp-navigation-bar>

    <div class="main-body" :style="contentStyle">
      <div class="main-content">
        <router-view :class="`${routeEntry}-page`"></router-view>
      </div>
    </div>

    <mp-tabbar
      v-if="$route.name !== 'mp-component.basic.footer'"
      class="main-nav"
      :current="$store.tabbarIndex"
      :list="$store.tabbarItems"
      @change="onTabbarChange"
    ></mp-tabbar>

    <!-- <template v-if="isMP">
      <login-dialog :open="showLogin" @getPhoneNumber="getUserInfo">
        <div>Hello BalmJS</div>
      </login-dialog>
    </template> -->
  </div>
</template>

<script>
import miniprogram from '@/mixins/miniprogram';

export default {
  name: 'App',
  mixins: [miniprogram],
  props: {
    topAppBarColors: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    title() {
      return `BalmJS - ${this.routeEntry}`;
    },
    color() {
      const result = {
        bgColor: '#6200ee',
        frontColor: '#fff'
      };

      switch (this.routeEntry) {
        case 'wx-component':
          result.bgColor = '#d32f2f';
          break;
        case 'mp-component':
          result.bgColor = '#388e3c';
          break;
        case 'wx-api':
          result.bgColor = '#1976d2';
          break;
        case 'wx-cloud':
          result.bgColor = '#f57c00';
          result.frontColor = '#000';
          break;
      }

      return result;
    }
  },
  created() {
    this.$bus.on('on-loading', () => {
      this.isLoading = true;
    });

    this.$bus.on('off-loading', () => {
      this.isLoading = false;
    });
  },
  methods: {
    onNavBack() {
      this.isMP ? this.$wxApi.navigateBack() : this.$router.back();
    },
    onTabbarChange({ detail }) {
      const { index, item } = detail;
      this.$store.tabbarIndex = index;
      this.isMP
        ? this.$store.onClickOpen(item.url)
        : this.$router.push(item.url);
    }
  }
};
</script>
