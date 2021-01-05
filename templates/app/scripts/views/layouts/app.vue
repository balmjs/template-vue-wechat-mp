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
    <KFlex class="main-nav">
      <KFlexItem>
        <KView class="placeholder">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </KView>
      </KFlexItem>
      <KFlexItem>
        <KView class="placeholder">
          <router-link :to="{ name: 'demos.ui' }">UI</router-link>
        </KView>
      </KFlexItem>
      <KFlexItem>
        <KView class="placeholder">
          <router-link :to="{ name: 'demos.api' }">API</router-link>
        </KView>
      </KFlexItem>
      <KFlexItem>
        <KView class="placeholder">
          <router-link :to="{ name: 'demos.test' }">Test</router-link>
        </KView>
      </KFlexItem>
      <KFlexItem>
        <KView class="placeholder">
          <router-link :to="{ name: 'demos.wx' }">WX</router-link>
        </KView>
      </KFlexItem>
    </KFlex>
    <KToast type="loading" v-model="isLoading"></KToast>
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
