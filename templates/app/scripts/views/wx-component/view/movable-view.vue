<template>
  <div>
    <div class="title">wx-movable-area/wx-movable-view</div>
    <div class="comp-cnt wx-movable-cnt">
      <wx-movable-area class="wx-movable-area">
        <wx-movable-view
          ref="wx-movable-view"
          class="wx-movable-view"
          :inertia="wxMovableView.inertia"
          :out-of-bounds="wxMovableView.outOfBounds"
          :disabled="wxMovableView.disabled"
          :animation="wxMovableView.animation"
          :scale-area="wxMovableView.scaleArea"
          :damping="wxMovableView.damping"
          :friction="wxMovableView.friction"
          :scale="wxMovableView.scale"
          :scale-min="wxMovableView.scaleMin"
          :scale-max="wxMovableView.scaleMax"
          direction="all"
          @change="$store.log('[wx-movable-view change]', $event.detail)"
          @scale="$store.log('[wx-movable-view scale]', $event.detail)"
          @htouchmove="$store.log('[wx-movable-view htouchmove]', $event)"
          @vtouchmove="$store.log('[wx-movable-view vtouchmove]', $event)"
        >
          text
        </wx-movable-view>
        <wx-movable-view
          v-for="item in wxMovableView.count"
          :key="item"
          :inertia="true"
          :out-of-bounds="true"
          :animation="true"
          direction="all"
          class="wx-movable-view"
          @change="$store.log('[wx-movable-view change]', $event.detail)"
          @scale="$store.log('[wx-movable-view scale]', $event.detail)"
          @htouchmove="$store.log('[wx-movable-view htouchmove]', $event)"
          @vtouchmove="$store.log('[wx-movable-view vtouchmove]', $event)"
        >
          text
        </wx-movable-view>
        <template v-if="wxMovableView.addDirection">
          <wx-movable-view
            :inertia="true"
            :out-of-bounds="true"
            :animation="true"
            direction="all"
            class="wx-movable-view"
            @change="$store.log('[wx-movable-view all change]', $event.detail)"
            @htouchmove="$store.log('[wx-movable-view all htouchmove]', $event)"
            @vtouchmove="$store.log('[wx-movable-view all vtouchmove]', $event)"
          >
            all
          </wx-movable-view>
          <wx-movable-view
            x="250"
            :inertia="true"
            :out-of-bounds="true"
            :animation="true"
            direction="vertical"
            class="wx-movable-view"
            @change="
              $store.log('[wx-movable-view vertical change]', $event.detail)
            "
            @htouchmove="
              $store.log('[wx-movable-view vertical htouchmove]', $event)
            "
            @vtouchmove="
              $store.log('[wx-movable-view vertical vtouchmove]', $event)
            "
          >
            v
          </wx-movable-view>
          <wx-movable-view
            y="250"
            :inertia="true"
            :out-of-bounds="true"
            :animation="true"
            direction="horizontal"
            class="wx-movable-view"
            @change="
              $store.log('[wx-movable-view horizontal change]', $event.detail)
            "
            @htouchmove="
              $store.log('[wx-movable-view horizontal htouchmove]', $event)
            "
            @vtouchmove="
              $store.log('[wx-movable-view horizontal vtouchmove]', $event)
            "
          >
            h
          </wx-movable-view>
          <wx-movable-view
            x="250"
            y="250"
            :inertia="true"
            :out-of-bounds="true"
            :animation="true"
            direction="none"
            class="wx-movable-view"
            @change="$store.log('[wx-movable-view none change]', $event.detail)"
            @htouchmove="
              $store.log('[wx-movable-view none htouchmove]', $event)
            "
            @vtouchmove="
              $store.log('[wx-movable-view none vtouchmove]', $event)
            "
          >
            none
          </wx-movable-view>
        </template>
      </wx-movable-area>
      <div class="opr-cnt">
        <wx-button
          class="wx-button opr-button move-1"
          @click="moveWxMovableView()"
        >
          移动（随机）
        </wx-button>
        <wx-button
          class="wx-button opr-button move-2"
          @click="
            moveWxMovableView(wxMovableView.x - 100, wxMovableView.y - 100)
          "
        >
          移动（-100, -100）
        </wx-button>
        <wx-button
          class="wx-button opr-button move-3"
          @click="
            moveWxMovableView(wxMovableView.x + 100, wxMovableView.y + 100)
          "
        >
          移动（+100, +100）
        </wx-button>
        <wx-button
          class="wx-button opr-button move-4"
          @click="moveWxMovableView(0, 0)"
        >
          移动（0, 0）
        </wx-button>
        <wx-button
          class="wx-button opr-button scale-1"
          @click="scaleWxMovableView()"
        >
          放缩（随机）
        </wx-button>
        <wx-button
          class="wx-button opr-button scale-2"
          @click="scaleWxMovableView(wxMovableView.scaleValue * 0.8)"
        >
          放缩（0.8）
        </wx-button>
        <wx-button
          class="wx-button opr-button scale-3"
          @click="scaleWxMovableView(wxMovableView.scaleValue * 1.2)"
        >
          放缩（1.2）
        </wx-button>
        <wx-button
          class="wx-button opr-button scale-4"
          @click="scaleWxMovableView(1)"
        >
          放缩（1）
        </wx-button>
        <wx-button
          class="wx-button opr-button add-view"
          @click="wxMovableView.count++"
        >
          增加滑块
        </wx-button>
        <wx-button
          class="wx-button opr-button reduce-view"
          @click="wxMovableView.count = Math.max(wxMovableView.count - 1, 0)"
        >
          删除滑块
        </wx-button>
        <wx-button
          class="wx-button opr-button clear-view"
          @click="wxMovableView.count = 0"
        >
          清空滑块
        </wx-button>
        <wx-button
          class="wx-button opr-button add-view"
          @click="wxMovableView.addDirection = true"
        >
          增加四个不同方向滑块
        </wx-button>
        <wx-button
          class="wx-button opr-button add-view"
          @click="wxMovableView.addDirection = false"
        >
          删除四个不同方向滑块
        </wx-button>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">惯性</div>
        <wx-switch
          :checked="true"
          @change="wxMovableView.inertia = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">允许超过可移动区域</div>
        <wx-switch
          :checked="true"
          @change="wxMovableView.outOfBounds = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">禁用</div>
        <wx-switch
          @change="wxMovableView.disabled = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">动画</div>
        <wx-switch
          :checked="true"
          @change="wxMovableView.animation = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">放缩区域为整个 area</div>
        <wx-switch
          @change="wxMovableView.scaleArea = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">阻尼系数</div>
        <div class="opr-box">
          <wx-slider
            min="1"
            max="100"
            step="2"
            value="20"
            :show-value="true"
            @change="wxMovableView.damping = $event.detail.value"
          ></wx-slider>
        </div>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">摩擦系数</div>
        <div class="opr-box">
          <wx-slider
            min="1"
            max="10"
            step="1"
            value="2"
            :show-value="true"
            @change="wxMovableView.friction = $event.detail.value"
          ></wx-slider>
        </div>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">放缩</div>
        <wx-switch
          :checked="true"
          @change="wxMovableView.scale = $event.detail.value.toString()"
        ></wx-switch>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">放缩最小值</div>
        <div class="opr-box">
          <wx-slider
            min="0.5"
            max="1"
            step="0.1"
            value="0.5"
            :show-value="true"
            @change="wxMovableView.scaleMin = $event.detail.value"
          ></wx-slider>
        </div>
      </div>
      <div class="opr-cnt">
        <div class="opr-label">放缩最大值</div>
        <div class="opr-box">
          <wx-slider
            min="1"
            max="10"
            step="1"
            value="10"
            :show-value="true"
            @change="wxMovableView.scaleMax = $event.detail.value"
          ></wx-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxMovableView: {
        x: 0,
        y: 0,
        inertia: true,
        outOfBounds: true,
        disabled: undefined,
        animation: undefined,
        scaleArea: undefined,
        damping: undefined,
        friction: undefined,
        scale: true,
        scaleValue: 1,
        scaleMin: undefined,
        scaleMax: undefined,
        count: 0,
        addDirection: false
      }
    };
  },
  methods: {
    setAttribute(ref, name, value) {
      this.$refs[ref].setAttribute(name, value);
    },
    moveWxMovableView(x, y) {
      if (x === undefined && y === undefined) {
        x = ~~(Math.random() * 300);
        y = ~~(Math.random() * 300);
      }
      x = Math.min(Math.max(x, 0), 300);
      y = Math.min(Math.max(y, 0), 300);
      this.wxMovableView.x = x;
      this.wxMovableView.y = y;
      this.$refs['wx-movable-view'].setAttribute('x', x);
      this.$refs['wx-movable-view'].setAttribute('y', y);
    },
    scaleWxMovableView(scale) {
      if (scale === undefined) {
        scale = Math.random() * 2.5 + 0.5;
      }
      scale = Math.min(Math.max(scale, 0.5), 3);
      this.wxMovableView.scaleValue = scale;
      this.$refs['wx-movable-view'].setAttribute('scale-value', scale);
    }
  }
};
</script>
