<template>
  <div class="movable-demo">
    <KMovableArea class="movable-area">
      <KMovableView
        ref="movableView"
        :x="x"
        :y="y"
        class="movable-view"
        direction="all"
        @change="onChange"
        @scale="onScale"
        @htouchmove="onMove"
        @vtouchmove="onMove"
      >
        view
      </KMovableView>
    </KMovableArea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0
    };
  },
  methods: {
    onChange({ detail }) {
      console.log('onChange', detail);
    },
    onScale(val) {
      console.log('onScale');
    },
    onMove(val) {
      console.log('onMove');
    }
  }
};
</script>
