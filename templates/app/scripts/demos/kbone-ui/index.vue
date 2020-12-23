<template>
  <div class="page--ui-demos">
    <KCells v-if="$route.name === 'demos.ui'" title="UI Demos">
      <KCell
        v-for="item in uiDemosNav"
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
import demosRoutes from '@/routes/demos/ui';

export default {
  computed: {
    uiDemosNav() {
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
