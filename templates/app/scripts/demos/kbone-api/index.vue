<template>
  <div class="page--api-demos">
    <KCells v-if="$route.name === 'demos.api'" title="API Demos">
      <KCell
        v-for="item in apiDemosNav"
        :key="item.name"
        :value="item.path"
        @click.native="goto(item)"
      >
      </KCell>
    </KCells>
    <router-view v-else></router-view>
    <br />
    <hr />
    <br />
    <KButton @click="$router.back()">返回</KButton>
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
  created() {
    if (!this.isMP) {
      console.warn('请至“微信开发者工具”中测试 API');
      this.$router.back();
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
