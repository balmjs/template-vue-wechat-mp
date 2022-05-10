<template>
  <div>
    <div class="title">mp-slideview</div>

    <div class="comp-cnt mp-sliderview-cnt">
      <div class="mp-slideview-1">
        <mp-slideview
          show="true"
          :buttons="$store.mpSlideView.buttons"
          @buttontap="log('[mp-slideview] buttontap', $event.detail)"
        >
          <mp-cell value="左滑可以删除" footer="说明文字"></mp-cell>
        </mp-slideview>
      </div>
      <div class="mp-slideview-2">
        <mp-slideview
          :buttons="$store.mpSlideView.buttons"
          icon="true"
          @buttontap="log('[mp-slideview] buttontap', $event.detail)"
        >
          <div class="weui-slidecell">左滑可以删除（图标Button）</div>
        </mp-slideview>
      </div>
    </div>
  </div>
</template>
