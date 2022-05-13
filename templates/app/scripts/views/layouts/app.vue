<template>
  <div :class="className">
    <ui-top-app-bar
      :title="routeEntry"
      :color="color"
      :loading="loading"
      :is-home-page="isHomePage"
      :is-package-home="isPackageHome"
    ></ui-top-app-bar>

    <div class="main-body">
      <div class="main-content">
        <router-view :class="`${routeEntry}-page`"></router-view>
      </div>
    </div>

    <ui-navigation-bar
      :show="$route.name !== 'mp-component.basic.footer'"
    ></ui-navigation-bar>
  </div>
</template>

<script>
import miniprogram from '@/mixins/miniprogram';

export default {
  name: 'App',
  mixins: [miniprogram],
  data() {
    return {
      loading: false
    };
  },
  computed: {
    className() {
      return [
        'container',
        `${this.routeEntry}-container`,
        { 'is-mp': this.isMP }
      ];
    },
    color() {
      const result = {
        backColor: '#6200ee',
        frontColor: '#fff'
      };

      switch (this.routeEntry) {
        case 'wx-component':
          result.backColor = '#d32f2f';
          break;
        case 'mp-component':
          result.backColor = '#388e3c';
          break;
        case 'wx-api':
          result.backColor = '#1976d2';
          break;
        case 'wx-cloud':
          result.backColor = '#f57c00';
          result.frontColor = '#000';
          break;
      }

      return result;
    }
  },
  mounted() {
    this.$bus.on('on-loading', () => {
      this.loading = true;
    });

    this.$bus.on('off-loading', () => {
      this.loading = false;
    });
  }
};
</script>
