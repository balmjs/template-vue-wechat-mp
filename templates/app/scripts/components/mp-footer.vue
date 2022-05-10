<template>
  <div
    :class="[
      'weui-footer',
      {
        'weui-footer_fixed-bottom': fixedBottom
      }
    ]"
  >
    <p v-if="links.length" class="weui-footer__links">
      <a
        v-for="(link, index) in links"
        :key="index"
        class="weui-footer__link"
        :href="link.url || 'javascript:void(0)'"
      >
        {{ link.name }}
      </a>
    </p>
    <p class="weui-footer__text">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MpFooter',
  props: {
    fixedBottom: {
      type: Boolean,
      default: false
    },
    links: {
      type: Array,
      default: () => []
    }
  }
};
</script>
