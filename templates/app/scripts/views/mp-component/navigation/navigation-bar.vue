<template>
  <div>
    <mp-navigation-bar
      :loading="mpNavigationBar.loading"
      :show="mpNavigationBar.show.toString()"
      :animated="mpNavigationBar.animated.toString()"
      :color="mpNavigationBar.color"
      :background="mpNavigationBar.background"
      :back="true"
      style="z-index: 1"
    >
      <span slot="center">我是标题</span>
    </mp-navigation-bar>

    <div class="title">mp-navigation-bar</div>
    <div class="comp-cnt">
      <!-- 放到最顶端 -->
      <div class="opr-cnt">
        <div class="opr-label">
          <div class="opr-label">触发 loading</div>
          <wx-switch
            @change="mpNavigationBar.loading = $event.detail.value"
          ></wx-switch>
        </div>
        <wx-button
          class="wx-button opr-button"
          @tap="mpNavigationBar.color = '#07C160'"
        >
          修改文字颜色
        </wx-button>
        <wx-button
          class="wx-button opr-button"
          @tap="mpNavigationBar.background = '#ededed'"
        >
          修改背景颜色
        </wx-button>
        <div class="opr-cnt">
          <div class="opr-label">显示/隐藏</div>
          <wx-switch
            @change="mpNavigationBar.show = $event.detail.value"
          ></wx-switch>
        </div>
        <div class="opr-cnt">
          <div class="opr-label">动画</div>
          <wx-switch
            @change="mpNavigationBar.animated = $event.detail.value"
          ></wx-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mpNavigationBar: {
        loading: false,
        color: '#000',
        background: '#f8f8f8',
        show: false,
        animated: false
      }
    };
  }
};
</script>
