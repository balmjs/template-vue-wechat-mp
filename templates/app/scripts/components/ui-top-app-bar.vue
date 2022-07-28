<template>
  <mp-navigation-bar
    class="ui-top-app-bar"
    back="false"
    :background="color.backColor"
    :color="color.frontColor"
    :loading="loading"
    :show="show"
    animated="true"
  >
    <span slot="left">
      <mp-icon
        v-if="isMP && isPackageHome"
        icon="home"
        @click="onNavHome"
      ></mp-icon>
      <template v-else>
        <mp-icon
          v-if="!isHomePage"
          icon="back"
          size="12"
          @click="onNavBack"
        ></mp-icon>
      </template>
    </span>
    <span slot="center">{{ title }}</span>
  </mp-navigation-bar>
  <!-- <top-app-bar
    :title="title"
    :hiddenGoBack="isHomePage"
    bgColor="#9c27b0"
    :colorStop="['#9c27b0', '#4a148c']"
    @ready="onReady"
    @back="onNavBack"
  ></top-app-bar> -->
</template>

<script>
// import customTopAppBarMixin from '@/mixins/top-app-bar';

export default {
  name: 'UiTopAppBar',
  // mixins: [customTopAppBarMixin],
  props: {
    title: {
      type: String,
      default: 'Hello BalmJS'
    },
    color: {
      type: Object,
      default: () => ({})
    },
    loading: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    isHomePage: {
      type: Boolean,
      default: false
    },
    isPackageHome: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onNavBack() {
      this.$router.back();
    },
    onNavHome() {
      this.$store.redirectTo('/main');
    }
  }
};
</script>
