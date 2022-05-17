<template>
  <ul v-if="items.length" class="ui-sub-nav">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="ui-sub-nav-item"
      @click="onSubNavChange(index)"
    >
      <mp-flex>
        <mp-flex-item>{{ types[item.path] }}</mp-flex-item>
      </mp-flex>
      <mp-cells v-if="index === $store.subNavIndex">
        <template v-if="item.children.length">
          <mp-cell
            v-for="subItem in item.children"
            :key="subItem.name"
            link="true"
            :value="subItem.path"
            @click.stop="redirect(subItem)"
          ></mp-cell>
        </template>
        <mp-cell v-else value="暂无数据"></mp-cell>
      </mp-cells>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UiSubNav',
  props: {
    types: {
      type: Object,
      default: () => ({})
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.$bus.on('reset-sub-nav', () => (this.$store.subNavIndex = -1));
  },
  methods: {
    onSubNavChange(index) {
      this.$store.subNavIndex = this.$store.subNavIndex === index ? -1 : index;
    },
    redirect({ name }) {
      if (this.$route.name !== name) {
        this.$router.push({
          name
        });
      }
    }
  }
};
</script>
