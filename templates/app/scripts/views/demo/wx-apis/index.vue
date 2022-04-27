<template>
  <div class="page--api-demos">
    <template v-if="isMP">
      <mp-cells v-if="$route.name === 'demos.api'" title="API Demos">
        <mp-cell
          v-for="item in wxApiDemoMenu"
          :key="item.name"
          :value="item.path"
          @click="goto(item)"
        >
        </mp-cell>
      </mp-cells>
      <router-view v-else></router-view>
    </template>
    <p v-else>请至“微信开发者工具”中测试 API</p>
  </div>
</template>

<script>
import wxApisDemoRoutes from '@/routes/demo/wx-apis';

export default {
  computed: {
    wxApiDemoMenu() {
      return wxApisDemoRoutes[0].children;
    }
  },
  methods: {
    goto({ name }) {
      this.$router.push({
        name
      });
    }
  }
};
</script>
