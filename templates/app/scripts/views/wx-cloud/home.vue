<template>
  <div>
    <h1>云开发</h1>
    <sub-nav :types="navTypes" :items="navItems"></sub-nav>
  </div>
</template>

<script>
import { cloudSubRoutes } from '@/routes/modules/wx-cloud';

const navTypes = {};

export default {
  data() {
    return {
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
