<template>
  <div class="page--home">
    <header class="home-header">
      <h2>
        <a href="//balmjs.com/">BalmJS</a>
      </h2>
      <p>A flexible front-end workflow for webapps</p>
      <hr />
    </header>

    <KCells title="UI Demos">
      <KCell
        v-for="item in navList"
        :key="item.name"
        :value="item.path"
        @click.native="goto(item)"
      >
      </KCell>
    </KCells>
  </div>
</template>

<script>
import uiRoutes from '@/routes/ui';

export default {
  computed: {
    navList() {
      return uiRoutes[0].children;
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
