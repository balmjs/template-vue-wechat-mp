<template>
  <div class="page--api-demos">
    <teamplte v-if="isMP">
      <KCells v-if="$route.name === 'demos.api'" title="API Demos">
        <KCell
          v-for="item in apiDemosNav"
          :key="item.name"
          class="weui-cell_access"
          :value="item.path"
          @click.native="goto(item)"
        >
        </KCell>
      </KCells>
      <router-view v-else></router-view>
    </teamplte>
    <p v-else>请至“微信开发者工具”中测试 API</p>
  </div>
</template>

<script>
import demosRoutes from '@/routes/demos/api';

export default {
  computed: {
    apiDemosNav() {
      return demosRoutes[0].children;
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
