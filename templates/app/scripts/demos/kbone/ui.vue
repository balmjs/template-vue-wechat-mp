<template>
  <div class="page--ui-demos">
    <router-view></router-view>
  </div>
</template>

<script>
import demosRoutes from '@/routes/demos';

export default {
  computed: {
    uiDemosNav() {
      return demosRoutes[0].children[0].children;
    }
  }
};
</script>
