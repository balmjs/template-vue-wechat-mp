<template>
  <div>
    <h1>云开发</h1>
    <sub-nav v-if="isMP || DEBUG" :types="navTypes" :items="navItems"></sub-nav>
    <p v-else>请至“微信开发者工具”中测试 云服务</p>
  </div>
</template>

<script>
import { cloudSubRoutes } from '@/routes/modules/wx-cloud';

const DEBUG = false;
const navTypes = {};

export default {
  data() {
    return {
      DEBUG,
      navTypes
    };
  },
  computed: {
    navItems() {
      return cloudSubRoutes.map(({ path, name, children }) => {
        return {
          path,
          name,
          children // : children.map((path, name) => ({ path, name }))
        };
      });
    }
  }
};
</script>
