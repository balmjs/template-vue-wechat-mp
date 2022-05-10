<template>
  <div>
    <div>
      <h4>当前位置经纬度</h4>
      <div v-if="result" style="text-align: center">
        <span>{{ result.latitude }}, {{ result.longitude }}</span>
      </div>
      <p v-else>未获取</p>
    </div>
    <div>
      <wx-button class="weui-btn" type="primary" @click="onLocation">
        获取位置
      </wx-button>
      <wx-button class="weui-btn" @click="result = null">清空</wx-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null
    };
  },
  methods: {
    async onLocation() {
      const { authSetting } = await this.$wxApi.getSetting();
      console.log('authSetting', authSetting);
      if (authSetting['scope.userLocation']) {
        const res = await this.$wxApi.getLocation();
        console.log('getLocation', res);
        this.result = res;
      } else {
        try {
          const res = await this.$wxApi.authorize({
            scope: 'scope.userLocation'
          });
          console.log(res);
          this.result = res;
        } catch (e) {
          console.log(e);
          this.result = e;
        }
      }
    }
  }
};
</script>
