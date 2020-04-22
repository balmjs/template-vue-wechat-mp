<template>
  <div class="container">
    <template v-if="isMP">
      <top-status-bar
        title="BalmJS for MP"
        :hiddenGoBack="hiddenGoBack"
        bgColor="#A6D8FD"
        :colorStop="['#A6D8FD', '#6DB0FA']"
        @back="goBack"
      ></top-status-bar>
    </template>
    <router-view></router-view>
  </div>
</template>

<script>
import miniprogram from '@/mixins/miniprogram';

export default {
  name: 'app',
  mixins: [miniprogram]
};
</script>
