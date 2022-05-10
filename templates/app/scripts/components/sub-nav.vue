<template>
  <ul class="sub-nav">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="sub-nav-item"
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
  name: 'SubNav',
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
  methods: {
    onSubNavChange(index) {
      console.log('onSubNavChange', index);
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
