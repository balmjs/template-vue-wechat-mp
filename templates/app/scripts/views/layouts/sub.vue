<template>
  <div :class="['container', { 'is-mp': isMP }]">
    <template v-if="isMP">
      <top-app-bar
        title="BalmJS - sub page"
        :hiddenGoBack="isHomePage"
        bgColor="#009688"
        :colorStop="['#009688', '#004d40']"
        @ready="onReady"
        @back="goBack"
      ></top-app-bar>
    </template>
    <div class="main-body" :style="contentStyle">
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import miniprogram from '@/mixins/miniprogram';

export default {
  name: 'SubApp',
  mixins: [miniprogram]
};
</script>
