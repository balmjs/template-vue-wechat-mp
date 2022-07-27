<template>
  <div>
    <div class="title">wx-scroll-view</div>
    <div class="comp-cnt wx-scroll-view-cnt">
      <wx-scroll-view
        ref="wx-scroll-view-y"
        class="wx-scroll-view-y"
        :scroll-y="true"
        :scroll-with-animation="wxScrollView.y.scrollWithAnimation"
        :refresher-enabled="wxScrollView.y.refresherEnabled"
        :refresher-default-style="
          wxScrollView.y.refresherCustom ? 'none' : 'black'
        "
        @scroll="$store.log('[wx-scroll-view scroll]', $event.detail)"
        @scrolltoupper="
          $store.log('[wx-scroll-view scrolltoupper]', $event.detail)
        "
        @scrolltolower="
          $store.log('[wx-scroll-view scrolltolower]', $event.detail)
        "
        @refresherpulling="onScrollViewYRefresherPulling"
        @refresherrefresh="onScrollViewYRefresherRefresh"
        @refresherrestore="
          $store.log('[wx-scroll-view refresherrestore]', $event.detail)
        "
        @refresherabort="
          $store.log('[wx-scroll-view refresherabort]', $event.detail)
        "
      >
        <div class="inner2-y">
          <div id="yblock1" class="block block1"></div>
          <div id="yblock2" class="block block2"></div>
          <div id="yblock3" class="block block3"></div>
          <div id="yblock4" class="block block4"></div>
          <div id="yblock5" class="block block5"></div>
        </div>
        <div
          v-if="wxScrollView.y.refresherCustom"
          slot="refresher"
          ref="refresh-container"
          class="refresh-container"
        >
          <div class="refresh-container-text">下拉刷新</div>
        </div>
      </wx-scroll-view>
      <div class="opr-cnt opr-cnt-y">
        <wx-button
          class="wx-button opr-button"
          @click="
            setAttribute('wx-scroll-view-y', 'scroll-into-view', 'yblock3')
          "
        >
          滑动到第三个
        </wx-button>
        <wx-button
          class="wx-button opr-button"
          @click="setAttribute('wx-scroll-view-y', 'scroll-top', 120)"
        >
          滚动到 120px 处
        </wx-button>
        <wx-button
          class="wx-button opr-button"
          @click="setAttribute('wx-scroll-view-y', 'refresher-triggered', true)"
        >
          触发下拉
        </wx-button>
      </div>
      <div class="opr-cnt opr-cnt-y">
        <div class="opr-label">动画</div>
        <wx-switch
          :checked="true"
          @change="
            wxScrollView.y.scrollWithAnimation = $event.detail.value.toString()
          "
        ></wx-switch>
      </div>
      <div class="opr-cnt opr-cnt-y">
        <div class="opr-label">下拉刷新</div>
        <wx-switch
          @change="
            wxScrollView.y.refresherEnabled = $event.detail.value.toString()
          "
        ></wx-switch>
      </div>
      <div class="opr-cnt opr-cnt-y">
        <div class="opr-label">自定义下拉刷新</div>
        <wx-switch
          @change="
            wxScrollView.y.refresherCustom = $event.detail.value.toString()
          "
        ></wx-switch>
      </div>
      <wx-scroll-view
        ref="wx-scroll-view-x"
        class="wx-scroll-view-x"
        :scroll-x="true"
        :scroll-with-animation="wxScrollView.x.scrollWithAnimation"
        @scroll="
          wxScrollView.x.scrollIntoView = '';
          wxScrollView.x.scrollLeft = $event.detail.scrollLeft;
          $store.log('[wx-scroll-view scroll]', $event.detail);
        "
        @scrolltoupper="
          $store.log('[wx-scroll-view scrolltoupper]', $event.detail)
        "
        @scrolltolower="
          $store.log('[wx-scroll-view scrolltolower]', $event.detail)
        "
      >
        <div class="inner2-x">
          <div id="xblock1" class="block block1"></div>
          <div id="xblock2" class="block block2"></div>
          <div id="xblock3" class="block block3"></div>
          <div id="xblock4" class="block block4"></div>
          <div id="xblock5" class="block block5"></div>
        </div>
      </wx-scroll-view>
      <div class="opr-cnt">
        <wx-button
          class="wx-button opr-button"
          @click="
            setAttribute('wx-scroll-view-x', 'scroll-into-view', 'xblock3')
          "
        >
          滑动到第二个
        </wx-button>
        <wx-button
          class="wx-button opr-button"
          @click="setAttribute('wx-scroll-view-x', 'scroll-left', 120)"
        >
          滚动到 120px 处
        </wx-button>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">动画</div>
        <wx-switch
          :checked="true"
          @change="
            wxScrollView.x.scrollWithAnimation = $event.detail.value.toString()
          "
        ></wx-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxScrollView: {
        y: {
          scrollWithAnimation: true,
          refresherEnabled: undefined,
          refresherCustom: false
        },
        x: {
          scrollWithAnimation: true
        }
      }
    };
  },
  methods: {
    setAttribute(ref, name, value) {
      this.$refs[ref].setAttribute(name, value);
    },
    onScrollViewYRefresherPulling(evt) {
      this.$store.log('[wx-scroll-view refresherpulling]', evt.detail);
      const refreshContainer = this.$refs['refresh-container'];
      if (refreshContainer) {
        const p = Math.min(evt.detail.dy / 80, 1);
        refreshContainer.style.opacity = p;
        refreshContainer.style.transform = `scale(${p})`;
        window.$$forceRender();
      }
    },
    onScrollViewYRefresherRefresh(evt) {
      this.$store.log('[wx-scroll-view refresherrefresh]', evt.detail);
      setTimeout(
        () =>
          this.setAttribute('wx-scroll-view-y', 'refresher-triggered', false),
        1000
      );
    }
  }
};
</script>
