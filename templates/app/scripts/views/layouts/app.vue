<template>
  <div :class="['container', { 'is-mp': isMP }]">
    <!-- <template v-if="isMP">
      <top-app-bar
        title="BalmJS for MP"
        :hiddenGoBack="hiddenGoBack"
        bgColor="#A6D8FD"
        :colorStop="['#A6D8FD', '#6DB0FA']"
        @ready="onReady"
        @back="goBack"
      ></top-app-bar>
    </template> -->
    <div class="main-body" :style="contentStyle">
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
    <div class="weui-flex main-nav">
      <div class="weui-flex__item">
        <div class="placeholder">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">
          <router-link :to="{ name: 'demos.api' }">API</router-link>
        </div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">
          <router-link :to="{ name: 'demos.test' }">Test</router-link>
        </div>
      </div>
      <div class="weui-flex__item">
        <div class="placeholder">
          <router-link :to="{ name: 'demos.wx' }">WX</router-link>
        </div>
      </div>
    </div>
    <!-- <template v-if="isMP">
      <login-dialog :open="showLogin" @getPhoneNumber="getUserInfo">
        <div>Hello BalmJS</div>
      </login-dialog>
    </template> -->
  </div>
</template>

<script>
import { useBus } from 'balm-ui/plugins/event';
import miniprogram from '@/mixins/miniprogram';

export default {
  name: 'App',
  mixins: [miniprogram],
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    const bus = useBus();

    bus.on('on-loading', () => {
      this.isLoading = true;
    });

    bus.on('off-loading', () => {
      this.isLoading = false;
    });
  }
};
</script>
