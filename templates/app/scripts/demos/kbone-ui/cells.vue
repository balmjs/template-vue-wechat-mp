<template>
  <div>
    <KCells title="带说明的列表项">
      <KCell value="标题文字" footer="说明文字"></KCell>
    </KCells>

    <KCells title="带图标、说明的列表项">
      <KCell title="标题文字" footer="说明文字">
        <template #icon>
          <KIcon type="info"></KIcon>
        </template>
      </KCell>
    </KCells>

    <KCells title="带跳转的列表项">
      <KCell value="cell standard" class="weui-cell_access"></KCell>
    </KCells>

    <KCells title="带说明、跳转的列表项">
      <KCell
        value="cell standard"
        class="weui-cell_access"
        footer="说明文字"
      ></KCell>
    </KCells>

    <KCells title="带图标、说明、跳转的列表项">
      <KCell title="cell standard" class="weui-cell_access" footer="说明文字">
        <template #icon>
          <KIcon type="info"></KIcon>
        </template>
      </KCell>
    </KCells>
  </div>
</template>
