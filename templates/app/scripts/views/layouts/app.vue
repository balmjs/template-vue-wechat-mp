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
    <mp-flex class="main-nav">
      <mp-flex-item>
        <div class="placeholder">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </div>
      </mp-flex-item>
      <mp-flex-item>
        <div class="placeholder">
          <router-link :to="{ name: 'demo.wx-components' }">WX UI</router-link>
        </div>
      </mp-flex-item>
      <mp-flex-item>
        <div class="placeholder">
          <router-link :to="{ name: 'demo.weui' }">WE UI</router-link>
        </div>
      </mp-flex-item>
      <mp-flex-item>
        <div class="placeholder">
          <router-link :to="{ name: 'demo.wx-apis' }">WX API</router-link>
        </div>
      </mp-flex-item>
      <mp-flex-item>
        <div class="placeholder">
          <router-link :to="{ name: 'demo.test' }">Test</router-link>
        </div>
      </mp-flex-item>
    </mp-flex>
    <!-- <KToast type="loading" v-model="isLoading"></KToast> -->
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
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    this.$bus.$on('on-loading', () => {
      this.isLoading = true;
    });

    this.$bus.$on('off-loading', () => {
      this.isLoading = false;
    });
  }
};
</script>
