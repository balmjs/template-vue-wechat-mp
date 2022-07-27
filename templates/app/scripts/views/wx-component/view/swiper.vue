<template>
  <div>
    <div class="title">wx-swiper/wx-swiper-item</div>
    <div class="comp-cnt wx-swiper-cnt">
      <wx-swiper
        ref="wx-swiper"
        class="wx-swiper"
        :indicator-dots="wxSwiper.indicatorDots"
        :autoplay="wxSwiper.autoplay"
        :circular="wxSwiper.circular"
        :vertical="wxSwiper.vertical"
        :previous-margin="wxSwiper.margin === 'true' ? '20px' : ''"
        :next-margin="wxSwiper.margin === 'true' ? '20px' : ''"
        :snap-to-edge="wxSwiper.snapToEdge"
        :skip-hidden-item-layout="wxSwiper.skipHiddenItemLayout"
        :kbone-enable-wheel="wxSwiper.kboneEnableWheel"
        :indicator-color="wxSwiper.indicatorColor === 'true' ? 'white' : ''"
        :indicator-active-color="
          wxSwiper.indicatorColor === 'true' ? 'red' : ''
        "
        :interval="wxSwiper.interval"
        :duration="wxSwiper.duration"
        :display-multiple-items="wxSwiper.displayMultipleItems"
        :easing-function="wxSwiper.easingFunction"
        @change="$store.log('[wx-swiper change]', $event.detail)"
        @transition="$store.log('[wx-swiper transition]', $event.detail)"
        @animationfinish="
          $store.log('[wx-swiper animationfinish]', $event.detail)
        "
      >
        <wx-swiper-item v-for="item in wxSwiper.totalItems" :key="item">
          <div :class="`wx-swiper-item-view wx-swiper-item-view-${item}`">
            {{ wxSwiper.charString[item - 1] }}
          </div>
        </wx-swiper-item>
      </wx-swiper>
      <div class="opr-cnt">
        <div class="opr-label">指示点</div>
        <wx-switch
          :checked="true"
          @change="wxSwiper.indicatorDots = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">自动播放</div>
        <wx-switch
          @change="wxSwiper.autoplay = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">循环播放</div>
        <wx-switch
          @change="wxSwiper.circular = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">纵向</div>
        <wx-switch
          @change="wxSwiper.vertical = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">设置边距</div>
        <wx-switch
          @change="wxSwiper.margin = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">snap-to-edge</div>
        <wx-switch
          @change="wxSwiper.snapToEdge = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">隐藏不显示的滑块</div>
        <wx-switch
          :checked="true"
          @change="
            wxSwiper.skipHiddenItemLayout = $event.detail.value.toString()
          "
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">开启 wheel 事件（kbone-ui 特有）</div>
        <wx-switch
          :checked="true"
          @change="wxSwiper.kboneEnableWheel = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">指示点（默认）</div>
        <wx-switch
          @change="wxSwiper.indicatorColor = $event.detail.value.toString()"
        ></wx-switch>
        <div class="opr-label">指示点（红）</div>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">时间间隔</div>
        <div class="opr-box">
          <wx-slider
            min="1000"
            max="5000"
            step="500"
            value="3000"
            :show-value="true"
            @change="wxSwiper.interval = $event.detail.value"
          ></wx-slider>
        </div>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">滑动时长</div>
        <div class="opr-box">
          <wx-slider
            min="100"
            max="1000"
            step="100"
            value="500"
            :show-value="true"
            @change="wxSwiper.duration = $event.detail.value"
          ></wx-slider>
        </div>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">总滑块数量</div>
        <div class="opr-box">
          <wx-slider
            min="1"
            max="6"
            step="1"
            :value="wxSwiper.totalItems"
            :show-value="true"
            @change="wxSwiper.totalItems = $event.detail.value"
          ></wx-slider>
        </div>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">展示滑块数量</div>
        <div class="opr-box">
          <wx-slider
            min="1"
            max="3"
            step="1"
            value="1"
            :show-value="true"
            @change="onUpdateWxSwiperShowItems"
          ></wx-slider>
        </div>
      </div>
      <div class="opr-cnt">
        <wx-button
          class="wx-button opr-button"
          @click="setAttribute('wx-swiper', 'current', 1)"
        >
          跳转到第二个
        </wx-button>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">动画类型</div>
        <select @change="onUpdateWxSwiperEasingFunction">
          <option value="default" selected>default</option>
          <option value="linear">linear</option>
          <option value="easeInCubic">easeInCubic</option>
          <option value="easeOutCubic">easeOutCubic</option>
          <option value="easeInOutCubic">easeInOutCubic</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxSwiper: {
        indicatorDots: true,
        autoplay: undefined,
        circular: undefined,
        vertical: undefined,
        margin: undefined,
        snapToEdge: undefined,
        skipHiddenItemLayout: undefined,
        kboneEnableWheel: undefined,
        indicatorColor: undefined,
        interval: undefined,
        duration: undefined,
        totalItems: 3,
        charString: 'ABCDEF',
        displayMultipleItems: undefined,
        easingFunction: undefined
      }
    };
  },
  methods: {
    setAttribute(ref, name, value) {
      this.$refs[ref].setAttribute(name, value);
    },
    onUpdateWxSwiperShowItems(evt) {
      this.wxSwiper.displayMultipleItems = evt.detail.value;
      if (evt.detail.value === 2) this.wxSwiper.totalItems = 5;
      if (evt.detail.value === 3) this.wxSwiper.totalItems = 6;
    },
    onUpdateWxSwiperEasingFunction(evt) {
      let value = 'default';
      evt.target.querySelectorAll('option').forEach((option) => {
        if (option.selected) value = option.value;
      });
      this.wxSwiper.easingFunction = value;
    }
  }
};
</script>
