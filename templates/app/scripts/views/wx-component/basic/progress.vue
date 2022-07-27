<template>
  <div>
    <div class="title">wx-progress</div>
    <div class="comp-cnt">
      <wx-progress
        ref="wx-progress-update"
        class="wx-progress"
        :percent="wxProgress.percent1"
        :show-info="true"
        stroke-width="3"
        @activeend="$store.log('[wx-progress]', $event.detail)"
      ></wx-progress>
      <wx-progress
        ref="wx-progress-update"
        class="wx-progress"
        :percent="wxProgress.percent2"
        :active="true"
        stroke-width="6"
        @activeend="$store.log('[wx-progress]', $event.detail)"
      ></wx-progress>
      <wx-progress
        ref="wx-progress-update"
        class="wx-progress"
        :percent="wxProgress.percent3"
        :active="true"
        stroke-width="6"
        active-mode="forwards"
        @activeend="$store.log('[wx-progress]', $event.detail)"
      ></wx-progress>
      <wx-progress
        class="wx-progress"
        percent="60"
        :active="true"
        stroke-width="10"
        border-radius="5"
        @activeend="$store.log('[wx-progress]', $event.detail)"
      ></wx-progress>
      <wx-progress
        class="wx-progress"
        percent="80"
        color="#10AEFF"
        :active="true"
        stroke-width="14"
        duration="10"
        @activeend="$store.log('[wx-progress]', $event.detail)"
      ></wx-progress>
      <wx-button class="wx-button" @click="onUpdateWxProgress">
        更新进度
      </wx-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wxProgress: {
        percent1: 20,
        percent2: 40,
        percent3: 40
      }
    };
  },
  methods: {
    onUpdateWxProgress() {
      this.wxProgress.percent1 = 80;
      this.wxProgress.percent2 = 80;
      this.wxProgress.percent3 = 80;
    }
  }
};
</script>
