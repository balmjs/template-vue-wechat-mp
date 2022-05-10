<template>
  <div>
    <div class="title">mp-gallery</div>
    <div class="comp-cnt">
      <wx-button
        class="wx-button"
        type="default"
        @click="mpGallery.show = true"
      >
        显示 mp-gallery
      </wx-button>
      <mp-gallery
        :show="mpGallery.show"
        @change="$store.log('[mp-gallery] change', $event.detail)"
        @delete="$store.log('[mp-gallery] delete', $event.detail)"
        @hide="mpGallery.show = false"
        :img-urls="mpGallery.imgUrls"
        :delete="true"
        :hide-on-click="true"
        current="1"
      ></mp-gallery>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpGallery: {
        show: false,
        imgUrls: []
      }
    };
  },
  mounted() {
    for (let i = 1; i <= 3; i++) {
      this.mpGallery.imgUrls.push(`https://picsum.photos/800/600?random=${i}`);
    }
  }
};
</script>
