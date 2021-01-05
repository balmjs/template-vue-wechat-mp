<template>
  <div class="page--ui-demos">
    <template v-if="/^demos\.ui/.test($route.name)">
      <KCells
        v-for="navItem in navItems"
        :key="navItem.key"
        :title="NavNames[navItem.path]"
      >
        <KCell
          v-for="item in navItem.children"
          :key="item.name"
          class="weui-cell_access"
          :value="item.path"
          @click.native="goto(item)"
        ></KCell>
      </KCells>
    </template>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import { uiRoutes } from '@/routes/demos/ui';

const NavNames = {
  forms: '表单',
  basics: '基础组件',
  views: '视图组件',
  feedback: '操作反馈'
};

export default {
  data() {
    return {
      NavNames
    };
  },
  computed: {
    navItems() {
      return uiRoutes.map(({ path, name, children }) => {
        return {
          path,
          name,
          children
        };
      });
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
