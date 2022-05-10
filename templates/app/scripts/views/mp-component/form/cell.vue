<template>
  <div>
    <div class="title">mp-cells/mp-cell</div>

    <div class="comp-cnt">
      <mp-cells title="带说明的列表项">
        <mp-cell value="标题文字" footer="说明文字"></mp-cell>
        <mp-cell>
          <div>标题文字（使用 slot）</div>
          <div slot="footer">说明文字</div>
        </mp-cell>
        <mp-slideview
          show="true"
          :buttons="$store.mpSlideView.buttons"
          @buttontap="log('[mp-slideview] buttontap', $event.detail)"
        >
          <mp-cell value="左滑可以删除" footer="说明文字"></mp-cell>
        </mp-slideview>
      </mp-cells>
      <mp-cells title="带图标、说明的列表项" footer="底部说明文字">
        <mp-cell value="标题文字" footer="说明文字">
          <img
            slot="icon"
            :src="$store.mpCells.icon"
            style="
              margin-right: 16px;
              vertical-align: middle;
              width: 20px;
              height: 20px;
            "
          />
        </mp-cell>
        <mp-cell value="标题文字" footer="说明文字">
          <img
            slot="icon"
            :src="$store.mpCells.icon"
            style="
              margin-right: 16px;
              vertical-align: middle;
              width: 20px;
              height: 20px;
            "
          />
        </mp-cell>
      </mp-cells>
      <mp-cells title="带跳转的列表项">
        <mp-cell
          hover="true"
          value="有 hover 效果，无跳转 URL"
          footer="说明文字"
        >
          <img
            slot="title"
            :src="$store.mpCells.icon"
            style="
              margin-right: 16px;
              vertical-align: middle;
              width: 20px;
              height: 20px;
            "
          />
        </mp-cell>
      </mp-cells>
    </div>
  </div>
</template>
