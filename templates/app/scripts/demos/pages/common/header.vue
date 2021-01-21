<template>
  <div class="header">
    <p>Hello {{ store.sitename }}</p>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'balm-ui/plugins/store';

export default {
  name: 'MyHeader',
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.sitename = 'BalmJS';
    });

    return {
      store
    };
  }
};
</script>
